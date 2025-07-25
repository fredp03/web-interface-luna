import { useState, useRef, useCallback, useEffect } from "react";

function DbIndicator({ value }: { value: number }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px] transition-all duration-400 ease-out">
        <p className="block leading-[normal] text-nowrap whitespace-pre">{value.toFixed(1)}</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function CurrentDBWrapper({ value }: { value: number }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[31.044px]"
      data-name="Current dB Wrapper"
    >
      <DbIndicator value={value} />
    </div>
  );
}

function Frame3({
  height,
  isDragging,
}: {
  height: number;
  isDragging: boolean;
}) {
  return (
    <div
      className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-start pb-1 pt-0 px-0 relative shrink-0 ${!isDragging ? "transition-all duration-400 ease-out" : ""}`}
      style={{ height: `${height}px` }}
    >
      <div
        className={`bg-[#c7c7c7] h-full relative rounded-[3px] shrink-0 w-[23px] ${!isDragging ? "transition-all duration-400 ease-out" : ""}`}
        data-name="Fader Active"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
      </div>
    </div>
  );
}

function Frame2({
  height,
  isDragging,
}: {
  height: number;
  isDragging: boolean;
}) {
  return (
    <div
      className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-start min-h-px min-w-px pb-0 pt-1 px-0 relative shrink-0 ${!isDragging ? "transition-all duration-400 ease-out" : ""}`}
      style={{ height: `${height}px` }}
    >
      <div
        className={`bg-[#e38c54] h-full relative rounded-[3px] shrink-0 w-[23px] ${!isDragging ? "transition-all duration-400 ease-out" : ""}`}
        data-name="Fader Active"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
      </div>
    </div>
  );
}

function FxFader({ 
  value, 
  onChange 
}: { 
  value: number; 
  onChange: (value: number) => void;
}) {
  const faderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Convert percentage (0-100) to position (0-1, where 0 is top/100%, 1 is bottom/0%)
  const position = Math.max(0, Math.min(1, (100 - value) / 100));
  
  // Total height needs to match the container minus padding
  // Container is set with h-[251px] and py-[13px], so content height is 251 - 26 = 225px
  const totalHeight = 225;
  const handleHeight = 20;
  const trackHeight = totalHeight - handleHeight;
  
  const topHeight = position * trackHeight;
  const bottomHeight = trackHeight - topHeight;

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current || !faderRef.current) return;

      const rect = faderRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const newPosition = Math.max(0, Math.min(1, y / trackHeight));
      
      // Convert position back to percentage (inverted: 0 position = 100%, 1 position = 0%)
      const newValue = (1 - newPosition) * 100;
      
      onChange(Math.max(0, Math.min(100, newValue)));
    },
    [onChange, trackHeight],
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Handle double-click to reset fader to 50%
  const handleDoubleClick = useCallback(() => {
    onChange(50);
  }, [onChange]);

  // Add global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={faderRef}
      className="relative size-full"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[225px] items-center justify-start px-[3px] py-0 relative w-full">
          <Frame3
            height={topHeight}
            isDragging={isDragging.current}
          />
          <div
            className={`bg-[#dedede] h-5 rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-9 cursor-grab active:cursor-grabbing select-none z-10 ${!isDragging.current ? "transition-all duration-400 ease-out" : ""}`}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            title="Double-click to reset to 50%"
          />
          <Frame2
            height={bottomHeight}
            isDragging={isDragging.current}
          />
        </div>
      </div>
    </div>
  );
}

function FaderWrapper({ 
  value, 
  onChange 
}: { 
  value: number; 
  onChange: (value: number) => void;
}) {
  return (
    <div
      className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 h-[251px] items-center justify-start overflow-clip px-1 py-[13px] relative rounded-[5px] shrink-0 w-[46px]"
      data-name="Fader Wrapper"
    >
      <FxFader value={value} onChange={onChange} />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function FaderLabel({ label }: { label: string }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Current dB Wrapper"
    >
      <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[10px] text-center w-[90px]">
        <p className="block leading-[2]">
          {label}
        </p>
      </div>
    </div>
  );
}

function FxControlFader({ 
  value, 
  onChange, 
  label 
}: { 
  value: number; 
  onChange: (value: number) => void;
  label: string;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[26px] items-center justify-center p-0 relative shrink-0"
      data-name="FX Control Fader"
    >
      <CurrentDBWrapper value={value} />
      <FaderWrapper value={value} onChange={onChange} />
      <FaderLabel label={label} />
    </div>
  );
}

export function FxControlsView() {
  const [fxLevels, setFxLevels] = useState({
    verbDryWet: 2.4,
    verbDecay: 2.4,
    delayDryWet: 2.4,
  });

  const updateFxLevel = (key: keyof typeof fxLevels, value: number) => {
    setFxLevels(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 h-[450px] items-center justify-start left-[45px] p-0 top-[19px] w-[246px]"
      data-name="Fader Contents"
    >
      <div
        className="basis-0 box-border content-stretch flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0 w-full"
        data-name="Fader Wrapper"
      >
        <FxControlFader 
          value={fxLevels.verbDryWet}
          onChange={(value) => updateFxLevel('verbDryWet', value)}
          label="Verb. Dry / Wet"
        />
        <FxControlFader 
          value={fxLevels.verbDecay}
          onChange={(value) => updateFxLevel('verbDecay', value)}
          label="Verb. Decay"
        />
        <FxControlFader 
          value={fxLevels.delayDryWet}
          onChange={(value) => updateFxLevel('delayDryWet', value)}
          label="Delay Dry / Wet"
        />
      </div>
    </div>
  );
}