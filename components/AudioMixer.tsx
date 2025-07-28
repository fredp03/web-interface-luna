import { useState, useRef, useCallback, useEffect } from "react";
import svgPaths from "../imports/svg-ru6zz6su49";
import effectsSvgPaths from "../imports/svg-zt7xzcz392";

interface Track {
  id: number;
  name: string;
  isMuted: boolean;
  isSolo: boolean;
  isActive: boolean;
}

interface MidiStatus {
  midi_port: string;
  connected: boolean;
  available_ports: string[];
}

export default function AudioMixer() {
  const [faderValue, setFaderValue] = useState(2.4);
  const [isConnected, setIsConnected] = useState(false);
  const [activeButton, setActiveButton] = useState<'effects' | 'monitor' | 'backing'>('monitor');
  const [isEffectsView, setIsEffectsView] = useState(false);
  const [midiStatus, setMidiStatus] = useState<MidiStatus | null>(null);
  const [statusMessage, setStatusMessage] = useState("Ready - Move sliders to control LUNA faders");
  const [selectedInstrument, setSelectedInstrument] = useState('Fader 1');
  
  const [effectsValues, setEffectsValues] = useState({
    reverbDryWet: 2.4,
    reverbDecay: 2.4,
    delayDryWet: 2.4
  });
  
  const [tracks, setTracks] = useState<Track[]>([
    { id: 1, name: "Guitar 1", isMuted: false, isSolo: false, isActive: false },
    { id: 2, name: "Guitar 1", isMuted: false, isSolo: false, isActive: true },
    { id: 3, name: "Guitar 1", isMuted: false, isSolo: false, isActive: false },
  ]);

  const faderRef = useRef<HTMLDivElement>(null);
  const reverbDryWetRef = useRef<HTMLDivElement>(null);
  const reverbDecayRef = useRef<HTMLDivElement>(null);
  const delayDryWetRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isDraggingEffect = useRef<string | null>(null);
  const lastUpdateTime = useRef(0);
  const UPDATE_THROTTLE_MS = 50; // Limit updates to 20 per second

  // MIDI functionality
  const dbToMidi = useCallback((db: number): number => {
    // Map dB range from +6 to -60 to MIDI 0-127
    const clampedDb = Math.max(-60, Math.min(6, db));
    return Math.round(((clampedDb + 60) / 66) * 127);
  }, []);

  const sendMidiCommand = useCallback(async (instrumentName: string, value: number) => {
    // Determine endpoint based on selected control
    let endpoint = null;
    
    if (instrumentName.startsWith('Fader')) {
      const faderNumber = parseInt(instrumentName.split(' ')[1]);
      endpoint = `/api/fader/${faderNumber}/${value}`;
    } else if (instrumentName === 'Backing') {
      endpoint = `/api/fader/4/${value}`;
    } else if (instrumentName === 'Headphones') {
      endpoint = `/api/fader/5/${value}`;
    } else {
      console.error('Unknown instrument:', instrumentName);
      return;
    }
    
    // Throttle updates to prevent overwhelming the server
    const now = Date.now();
    if (now - lastUpdateTime.current < UPDATE_THROTTLE_MS) {
      return;
    }
    lastUpdateTime.current = now;

    setStatusMessage('Sending...');
    
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      
      if (data.status === 'ok') {
        setStatusMessage(`Sent: ${data.fader_name || instrumentName} = ${data.value}`);
      } else {
        setStatusMessage(`Error: ${JSON.stringify(data)}`);
      }
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setStatusMessage(`Network error: ${errorMessage}`);
      console.error('MIDI send error:', error);
    }
  }, []);

  const checkStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/status');
      const data = await response.json();
      setMidiStatus(data);
      setIsConnected(data.connected);
    } catch (error) {
      console.error('Status check error:', error);
      setIsConnected(false);
    }
  }, []);

  // Check status on component mount and periodically
  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [checkStatus]);

  const handleFaderChange = useCallback((newDb: number) => {
    setFaderValue(newDb);
    const midiValue = dbToMidi(newDb);
    sendMidiCommand(selectedInstrument, midiValue);
  }, [selectedInstrument, dbToMidi, sendMidiCommand]);

  const handleEffectChange = useCallback((effectType: string, value: number) => {
    setEffectsValues(prev => ({
      ...prev,
      [effectType]: value
    }));
    // For effects, we can send as CC messages or handle differently
    // This would need to be expanded based on your MIDI mapping
    const midiValue = Math.round((value / 100) * 127);
    // sendMidiCommand could be extended to handle effects
  }, []);
  const dbToMidi = useCallback((db: number): number => {
    // Map dB range from +6 to -60 to MIDI 0-127
    const clampedDb = Math.max(-60, Math.min(6, db));
    return Math.round(((clampedDb + 60) / 66) * 127);
  }, []);

  const sendMidiCommand = useCallback(async (instrumentName: string, value: number) => {
    // Determine endpoint based on selected control
    let endpoint = null;
    
    if (instrumentName.startsWith('Fader')) {
      const faderNumber = parseInt(instrumentName.split(' ')[1]);
      endpoint = `/api/fader/${faderNumber}/${value}`;
    } else if (instrumentName === 'Backing') {
      endpoint = `/api/fader/4/${value}`;
    } else if (instrumentName === 'Headphones') {
      endpoint = `/api/fader/5/${value}`;
    } else {
      console.error('Unknown instrument:', instrumentName);
      return;
    }
    
    // Throttle updates to prevent overwhelming the server
    const now = Date.now();
    if (now - lastUpdateTime.current < UPDATE_THROTTLE_MS) {
      return;
    }
    lastUpdateTime.current = now;

    setStatusMessage('Sending...');
    
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      
      if (data.status === 'ok') {
        setStatusMessage(`Sent: ${data.fader_name || instrumentName} = ${data.value}`);
      } else {
        setStatusMessage(`Error: ${JSON.stringify(data)}`);
      }
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setStatusMessage(`Network error: ${errorMessage}`);
      console.error('MIDI send error:', error);
    }
  }, []);

  const checkStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/status');
      const data = await response.json();
      setMidiStatus(data);
      setIsConnected(data.connected);
    } catch (error) {
      console.error('Status check error:', error);
      setIsConnected(false);
    }
  }, []);

  // Check status on component mount and periodically
  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [checkStatus]);

  const handleFaderChange = useCallback((newDb: number) => {
    setFaderValue(newDb);
    const midiValue = dbToMidi(newDb);
    sendMidiCommand(selectedInstrument, midiValue);
  }, [selectedInstrument, dbToMidi, sendMidiCommand]);

  const handleEffectChange = useCallback((effectType: string, value: number) => {
    setEffectsValues(prev => ({
      ...prev,
      [effectType]: value
    }));
    // For effects, we can send as CC messages or handle differently
    // This would need to be expanded based on your MIDI mapping
    const midiValue = Math.round((value / 100) * 127);
    // sendMidiCommand could be extended to handle effects
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    handleMouseMove(e);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (isDragging.current && faderRef.current) {
      const rect = faderRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = Math.max(0, Math.min(1, y / rect.height));
      
      // Convert percentage to dB value (+6 to -60 range)
      const dbValue = 6 - (percentage * 66);
      const roundedDb = Number(dbValue.toFixed(1));
      handleFaderChange(roundedDb);
    }

    if (isDraggingEffect.current) {
      let targetRef: React.RefObject<HTMLDivElement> | null = null;
      let effectKey: keyof typeof effectsValues | null = null;

      switch (isDraggingEffect.current) {
        case 'reverbDryWet':
          targetRef = reverbDryWetRef;
          effectKey = 'reverbDryWet';
          break;
        case 'reverbDecay':
          targetRef = reverbDecayRef;
          effectKey = 'reverbDecay';
          break;
        case 'delayDryWet':
          targetRef = delayDryWetRef;
          effectKey = 'delayDryWet';
          break;
      }

      if (targetRef?.current && effectKey) {
        const rect = targetRef.current.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const percentage = Math.max(0, Math.min(1, y / rect.height));
        
        // Convert percentage to 0-100% value for effects
        const effectValue = 100 - (percentage * 100);
        const roundedValue = Number(effectValue.toFixed(1));
        handleEffectChange(effectKey, roundedValue);
      }
    }
  }, [handleFaderChange, handleEffectChange]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    isDraggingEffect.current = null;
  }, []);

  const handleEffectMouseDown = useCallback((effectType: string) => (e: React.MouseEvent) => {
    isDraggingEffect.current = effectType;
    handleMouseMove(e);
  }, [handleMouseMove]);

  const toggleTrackMute = (trackId: number) => {
    setTracks(tracks.map(track => 
      track.id === trackId 
        ? { ...track, isMuted: !track.isMuted }
        : track
    ));
  };

  const toggleTrackSolo = (trackId: number) => {
    setTracks(tracks.map(track => 
      track.id === trackId 
        ? { ...track, isSolo: !track.isSolo }
        : track
    ));
  };

  const handleButtonClick = (buttonType: 'effects' | 'monitor' | 'backing') => {
    setActiveButton(buttonType);
    
    // Map button types to instruments for MIDI control
    switch (buttonType) {
      case 'monitor':
        setSelectedInstrument('Fader 1');
        break;
      case 'backing':
        setSelectedInstrument('Backing');
        break;
      case 'effects':
        setSelectedInstrument('Fader 2');
        break;
    }
  };

  // Calculate fader position as percentage (0 = top, 1 = bottom)
  const faderPosition = (6 - faderValue) / 66;

  // Calculate effect fader positions (0 = top, 1 = bottom)
  const reverbDryWetPosition = (100 - effectsValues.reverbDryWet) / 100;
  const reverbDecayPosition = (100 - effectsValues.reverbDecay) / 100;
  const delayDryWetPosition = (100 - effectsValues.delayDryWet) / 100;

  return (
    <div className="relative size-full" 
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}>
      <div
        className="absolute bg-[#e0d7ce] box-border content-stretch flex flex-col gap-[26px] h-full items-center justify-start left-0 overflow-clip px-[29px] py-[30px] top-0 w-full"
        data-name="iPhone 16 Pro Max - 1"
      >
        {/* Header */}
        <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-2 relative shrink-0 w-full">
          <div className="font-['Anonymous_Pro:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">{selectedInstrument}</p>
          </div>
          <div
            className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0 cursor-pointer"
            onClick={checkStatus}
          >
            <div className="relative shrink-0 size-[13px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 13 13"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  fill={isConnected ? "#91DC87" : "#DC8791"}
                  id="Ellipse 1"
                  r="6.5"
                />
              </svg>
            </div>
            <div className="font-['Anonymous_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292d32] text-[11px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">{isConnected ? 'Connected' : 'Disconnected'}</p>
            </div>
          </div>
        </div>

        {/* Fader Area */}
        <div
          className="basis-0 bg-[#d4cbc4] grow min-h-px min-w-px relative rounded-[29px] shadow-[1px_1px_2px_0px_rgba(255,255,255,0.3),-1px_-1px_2px_0px_rgba(144,138,133,0.5)] shrink-0 w-full"
          data-name="Fader Area"
        >
          <div className="flex flex-col items-center relative size-full">
            <div className="box-border content-stretch flex flex-col items-center justify-start pb-8 pt-[18px] px-[19px] relative size-full">
              {/* dB Reading */}
              {!isEffectsView ? (
                <div className="basis-0 box-border gap-2.5 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] grow max-h-[63px] min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full">
                  <div className="[grid-area:1_/_2] box-border content-stretch flex flex-col gap-2.5 items-center justify-end p-0 relative self-center shrink-0">
                    <div className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap">
                      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px]">
                        <p className="block leading-[normal] text-nowrap whitespace-pre">{faderValue}</p>
                      </div>
                      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
                        <p className="block leading-[normal] text-nowrap whitespace-pre">dB</p>
                      </div>
                    </div>
                  </div>
                  <div className="[grid-area:1_/_3] relative shrink-0 cursor-pointer" onClick={() => setIsEffectsView(!isEffectsView)}>
                    <svg
                      className="block w-[102px] h-[63px]"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 102 63"
                    >
                      <g id="Options Icon Wrapper">
                        <path
                          d={svgPaths.p229de900}
                          id="Options Icon"
                          stroke="var(--stroke-0, #818181)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="box-border gap-2.5 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[51px] max-h-[63px] overflow-clip p-0 relative shrink-0 w-full">
                  <div className="[grid-area:1_/_3] relative shrink-0 cursor-pointer" onClick={() => setIsEffectsView(!isEffectsView)}>
                    <svg
                      className="block w-[117px] h-[51px]"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 117 51"
                    >
                      <g id="Options Icon Wrapper">
                        <path
                          d={effectsSvgPaths.p2db9cec0}
                          id="Options Icon"
                          stroke="var(--stroke-0, #818181)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              )}

              {/* Fader Wrapper */}
              {!isEffectsView ? (
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                  <div className="relative size-full">
                    <div className="box-border gap-[29px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-3.5 py-[9px] relative size-full">
                      {/* Fader DB Range */}
                      <div className="[grid-area:1_/_1] opacity-[0.68] relative shrink-0">
                        <div className="flex flex-col items-end relative size-full">
                          <div className="box-border content-stretch flex flex-col font-['Futura:Medium',_sans-serif] items-end justify-between leading-[0] not-italic p-[12px] relative size-full text-[#818181] text-[13px] text-left text-nowrap">
                            <div className="relative shrink-0">
                              <p className="block leading-[normal] text-nowrap whitespace-pre">+6</p>
                            </div>
                            <div className="relative shrink-0">
                              <p className="block leading-[normal] text-nowrap whitespace-pre">0</p>
                            </div>
                            <div className="relative shrink-0">
                              <p className="block leading-[normal] text-nowrap whitespace-pre">-20</p>
                            </div>
                            <div className="relative shrink-0">
                              <p className="block leading-[normal] text-nowrap whitespace-pre">-40</p>
                            </div>
                            <div className="relative shrink-0">
                              <p className="block leading-[normal] text-nowrap whitespace-pre">-60</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Fader */}
                      <div 
                        ref={faderRef}
                        className="[grid-area:1_/_2] box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-0 py-[13px] relative rounded-[5px] shrink-0 cursor-pointer"
                        onMouseDown={handleMouseDown}
                      >
                        <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                          <div className="flex flex-col items-center relative size-full">
                            <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative size-full">
                              {/* Fader Top (inactive area above handle) */}
                              <div 
                                className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
                                style={{ flexGrow: faderPosition }}
                              >
                                <div className="flex flex-row items-center justify-center relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-0 relative size-full">
                                    <div className="basis-0 bg-[#c7c7c7] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0">
                                      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Fader Handle */}
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-col items-center justify-center relative size-full">
                                  <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-0 relative w-full">
                                    <div className="aspect-[41/20] bg-[#dedede] max-h-5 max-w-[41px] min-h-[13px] min-w-[26.65px] rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full" />
                                  </div>
                                </div>
                              </div>

                              {/* Fader Active (active area below handle) */}
                              <div 
                                className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
                                style={{ flexGrow: 1 - faderPosition }}
                              >
                                <div className="flex flex-row items-center justify-center relative size-full">
                                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-0 relative size-full">
                                    <div className="basis-0 bg-[#d1624f] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0">
                                      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Effects Fader Wrapper
                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-16 items-center justify-center px-7 py-0 relative size-full">
                      {/* Reverb Dry/Wet Effect Fader */}
                      <div className="box-border content-stretch flex flex-col gap-[18px] h-full items-center justify-start p-0 relative shrink-0 w-9">
                        <div className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-[#818181] text-left text-nowrap">
                          <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[16px]">
                            <p className="block leading-[normal] text-nowrap whitespace-pre">{effectsValues.reverbDryWet}</p>
                          </div>
                          <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[12px]">
                            <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
                          </div>
                        </div>
                        <div 
                          ref={reverbDryWetRef}
                          className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[13px] relative rounded-[5px] shrink-0 w-full cursor-pointer"
                          onMouseDown={handleEffectMouseDown('reverbDryWet')}
                        >
                          <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                            <div className="flex flex-col items-center relative size-full">
                              <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative size-full">
                                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" style={{ flexGrow: reverbDryWetPosition }}>
                                  <div className="flex flex-row items-center justify-center relative size-full">
                                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
                                      <div className="basis-0 bg-[#c7c7c7] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0">
                                        <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0 w-full">
                                  <div className="flex flex-col items-center justify-center relative size-full">
                                    <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[9px] py-0 relative w-full">
                                      <div className="aspect-[41/20] bg-[#dedede] max-h-5 max-w-[41px] min-h-[13px] min-w-[26.65px] rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full" />
                                    </div>
                                  </div>
                                </div>
                                <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" style={{ flexGrow: 1 - reverbDryWetPosition }}>
                                  <div className="flex flex-row items-center justify-center relative size-full">
                                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
                                      <div className="basis-0 bg-[#e38c54] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0">
                                        <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
                        </div>
                        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] w-full">
                          <div className="font-['Afacad:Medium',_sans-serif] font-medium relative shrink-0 text-[13px] text-left text-nowrap">
                            <p className="block leading-[normal] whitespace-pre">Reverb</p>
                          </div>
                          <div className="font-['Futura:Condensed_Medium',_sans-serif] min-w-full not-italic relative shrink-0 text-[10px] text-center" style={{ width: "min-content" }}>
                            <p className="block leading-[normal]">Dry / Wet</p>
                          </div>
                        </div>
                      </div>

                      {/* Additional effect faders would go here - keeping the same structure */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(144,138,133,0.2),1px_-1px_2px_0px_inset_rgba(144,138,133,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(144,138,133,0.9)]" />
        </div>

        {/* Available Track Group */}
        <div className="basis-0 box-border content-stretch flex flex-col grow items-center justify-between max-h-[248px] min-h-px min-w-px px-0 py-[27px] relative shrink-0 w-full">
          {tracks.map((track, index) => (
            <div
              key={track.id}
              className={`${track.isActive ? 'bg-[#efe5dd]' : 'bg-[#d4cbc4] opacity-80'} h-[34px] ${index === 0 ? 'max-h-[34px]' : ''} relative rounded-md shrink-0 w-full`}
            >
              <div className="absolute border-[#dcc7b6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)]" />
              <div className="flex flex-row items-center max-h-inherit relative size-full">
                <div className="box-border content-stretch flex flex-row h-[34px] items-center justify-between max-h-inherit px-[29px] py-[5px] relative w-full">
                  <div className="font-['Futura:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
                    <p className="block leading-[normal] whitespace-pre">{track.name}</p>
                  </div>
                  <div 
                    className="h-2.5 relative shrink-0 w-3 cursor-pointer" 
                    onClick={() => toggleTrackMute(track.id)}
                  >
                    <div className="absolute bottom-[-5.007%] left-[-4.167%] right-[-4.167%] top-[-5.007%]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 14 12"
                      >
                        <path
                          d={svgPaths.p10f8c700}
                          stroke={track.isMuted ? "#DC8791" : "#292D32"}
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div 
                    className="relative shrink-0 size-3 cursor-pointer" 
                    onClick={() => toggleTrackSolo(track.id)}
                  >
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 12 12"
                    >
                      <g id="Solo Button">
                        <path d={svgPaths.p1c850000} fill={track.isSolo ? "#91DC87" : "#292D32"} />
                        <path d={svgPaths.p32fd0ee0} fill={track.isSolo ? "#91DC87" : "#292D32"} />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_1.3px_0px_inset_rgba(0,0,0,0.25)]" />
            </div>
          ))}
        </div>

        {/* Monitor Buttons */}
        <div className="box-border gap-[15px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[112px] h-28 p-0 relative shrink-0 w-full">
          {/* Effects Button */}
          <div 
            className={`[grid-area:1_/_1] box-border content-stretch flex flex-col h-[71px] items-center justify-between p-0 place-self-center relative shrink-0 w-[63.667px] cursor-pointer ${activeButton === 'effects' ? 'opacity-100' : 'opacity-70'}`}
            onClick={() => handleButtonClick('effects')}
          >
            <div className="relative shrink-0 size-[42px]">
              <div className="absolute bottom-[-9.524%] left-[-7.143%] right-[-9.524%] top-[-7.143%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <g filter="url(#filter0_dddd_1_487)" id="Button">
                    <rect fill="#D8CFC8" height="42" rx="9" width="42" x="3" y="3" />
                    <rect height="41" rx="8.5" stroke="#DCC7B6" width="41" x="3.5" y="3.5" />
                    <path d={svgPaths.p1d4b0300} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="49" id="filter0_dddd_1_487" width="49" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.9 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_487" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.941176 0 0 0 0 0.909804 0 0 0 0.9 0" />
                      <feBlend in2="effect1_dropShadow_1_487" mode="normal" result="effect2_dropShadow_1_487" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0" />
                      <feBlend in2="effect2_dropShadow_1_487" mode="normal" result="effect3_dropShadow_1_487" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-1" dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0" />
                      <feBlend in2="effect3_dropShadow_1_487" mode="normal" result="effect4_dropShadow_1_487" />
                      <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_487" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="font-['Alegreya_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">Effects</p>
            </div>
          </div>

          {/* Monitor Button */}
          <div 
            className={`[grid-area:1_/_2] box-border content-stretch flex flex-col h-[71px] items-center justify-between p-0 place-self-center relative shrink-0 w-[63.667px] cursor-pointer ${activeButton === 'monitor' ? 'opacity-100' : 'opacity-70'}`}
            onClick={() => handleButtonClick('monitor')}
          >
            <div className="relative shrink-0 size-[42px]">
              <div className="absolute bottom-[-9.524%] left-[-7.143%] right-[-9.524%] top-[-7.143%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <g filter="url(#filter0_dddd_1_468)" id="Button">
                    <rect fill="#D8CFC8" height="42" rx="9" width="42" x="3" y="3" />
                    <rect height="41" rx="8.5" stroke="#DCC7B6" width="41" x="3.5" y="3.5" />
                    <path d={svgPaths.pcd3f280} stroke="#53453B" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="49" id="filter0_dddd_1_468" width="49" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.9 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_468" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.941176 0 0 0 0 0.909804 0 0 0 0.9 0" />
                      <feBlend in2="effect1_dropShadow_1_468" mode="normal" result="effect2_dropShadow_1_468" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0" />
                      <feBlend in2="effect2_dropShadow_1_468" mode="normal" result="effect3_dropShadow_1_468" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-1" dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0" />
                      <feBlend in2="effect3_dropShadow_1_468" mode="normal" result="effect4_dropShadow_1_468" />
                      <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_468" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="font-['Alegreya_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">Monitor</p>
            </div>
          </div>

          {/* Backing Button */}
          <div 
            className={`[grid-area:1_/_3] box-border content-stretch flex flex-col h-[71px] items-center justify-between p-0 place-self-center relative shrink-0 w-[63.667px] cursor-pointer ${activeButton === 'backing' ? 'opacity-100' : 'opacity-70'}`}
            onClick={() => handleButtonClick('backing')}
          >
            <div className="relative shrink-0 size-[42px]">
              <div className="absolute bottom-[-9.524%] left-[-7.143%] right-[-9.524%] top-[-7.143%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <g filter="url(#filter0_dddd_1_487)" id="Button">
                    <rect fill="#D8CFC8" height="42" rx="9" width="42" x="3" y="3" />
                    <rect height="41" rx="8.5" stroke="#DCC7B6" width="41" x="3.5" y="3.5" />
                    <path d={svgPaths.p1d4b0300} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="49" id="filter0_dddd_1_487" width="49" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="1" />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.9 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_487" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.941176 0 0 0 0 0.909804 0 0 0 0.9 0" />
                      <feBlend in2="effect1_dropShadow_1_487" mode="normal" result="effect2_dropShadow_1_487" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="-1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0" />
                      <feBlend in2="effect2_dropShadow_1_487" mode="normal" result="effect3_dropShadow_1_487" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="-1" dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0" />
                      <feBlend in2="effect3_dropShadow_1_487" mode="normal" result="effect4_dropShadow_1_487" />
                      <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_487" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="font-['Alegreya_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">Backing</p>
            </div>
          </div>
        </div>
        
        {/* Status Area */}
        <div className="text-center text-sm text-gray-600 px-4 py-2 bg-white bg-opacity-50 rounded-md">
          {statusMessage}
        </div>
      </div>
    </div>
  );
}
