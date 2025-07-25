import svgPaths from "./imports/svg-t6e5grosb4";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./components/ui/resizable";
import {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

function OtherControls({
  selectedInstrument,
  onInstrumentSelect,
}: {
  selectedInstrument: string;
  onInstrumentSelect: (instrument: string) => void;
}) {
  return (
    <div
      className="h-[25px] relative shrink-0 w-[103px]"
      data-name="Other Controls"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 103 25"
      >
        <g id="Other Controls">
          <g id="Headphone Icon">
            <path
              d={svgPaths.p6e87800}
              fill={
                selectedInstrument === "Headphones"
                  ? "#e38c54"
                  : "#653C3C"
              }
            />
            <path
              d={svgPaths.p1ce17980}
              fill={
                selectedInstrument === "Headphones"
                  ? "#fff2ea"
                  : "var(--fill-0, #D1D1D1)"
              }
            />
          </g>
          <g id="Music Icon">
            <path
              d={svgPaths.p3c9b9a00}
              fill={
                selectedInstrument === "Backing"
                  ? "#e38c54"
                  : "#653C3C"
              }
            />
            <path
              d={svgPaths.p158e3500}
              fill={
                selectedInstrument === "Backing"
                  ? "#fff2ea"
                  : "var(--fill-0, #D1D1D1)"
              }
            />
          </g>
        </g>
      </svg>

      {/* Clickable overlay for headphones icon (left side) */}
      <div
        className={`absolute left-0 top-0 w-[40px] h-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 ${selectedInstrument === "Headphones" ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
        onClick={() => onInstrumentSelect("Headphones")}
        title="Headphones Level"
      />

      {/* Clickable overlay for music icon (right side) */}
      <div
        className={`absolute right-0 top-0 w-[40px] h-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 ${selectedInstrument === "Backing" ? "opacity-100" : "opacity-60 hover:opacity-80"}`}
        onClick={() => onInstrumentSelect("Backing")}
        title="Backing Track Level"
      />
    </div>
  );
}

function MenuBar({
  selectedInstrument,
  onInstrumentSelect,
}: {
  selectedInstrument: string;
  onInstrumentSelect: (instrument: string) => void;
}) {
  return (
    <div
      className="bg-[#fbfbfb] h-[63px] relative shrink-0 w-full"
      data-name="Menu Bar"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(129,129,129,0.59)] border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[63px] items-center justify-between px-[33px] py-2 relative w-full">
          <div className="flex flex-col font-['Futura:Condensed_ExtraBold',_sans-serif] h-[33px] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[20px] text-center w-50 transition-all duration-300 ease-in-out">
            <p className="block leading-[normal] text-left">
              {selectedInstrument}
            </p>
          </div>
          <OtherControls
            selectedInstrument={selectedInstrument}
            onInstrumentSelect={onInstrumentSelect}
          />
        </div>
      </div>
    </div>
  );
}

function DbIndicator({ value }: { value: number }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px] transition-all duration-400 ease-out">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          {value.toFixed(1)}
        </p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">
          dB
        </p>
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

function FaderDbRange() {
  return (
    <div
      className="box-border content-stretch flex flex-col font-['Futura:Medium',_sans-serif] h-[318px] items-center justify-between leading-[0] not-italic opacity-[0.68] p-0 relative shrink-0 text-[#818181] text-[13px] text-left w-[19px]"
      data-name="Fader DB Range"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[normal]">+6</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[normal]">0</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[normal]">-20</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[normal]">-40</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[normal]">-60</p>
      </div>
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

function Fader({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  const faderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Convert dB value to position (0-1, where 0 is top, 1 is bottom)
  // The scale shows: +6, 0, -20, -40, -60 evenly spaced with justify-between
  // This means they are at positions: 0, 0.25, 0.5, 0.75, 1.0
  const dbToPosition = (db: number) => {
    const scaleMarkers = [
      { db: 6, position: 0 }, // +6 at top (0%)
      { db: 0, position: 0.25 }, // 0 at 25% from top
      { db: -20, position: 0.5 }, // -20 at 50% from top
      { db: -40, position: 0.75 }, // -40 at 75% from top
      { db: -60, position: 1 }, // -60 at bottom (100%)
    ];

    // Find the two markers that bracket our dB value
    for (let i = 0; i < scaleMarkers.length - 1; i++) {
      const current = scaleMarkers[i];
      const next = scaleMarkers[i + 1];

      if (db >= next.db && db <= current.db) {
        // Linear interpolation between the two markers
        const ratio = (db - next.db) / (current.db - next.db);
        return (
          next.position +
          ratio * (current.position - next.position)
        );
      }
    }

    // Handle edge cases
    if (db > 6) return 0; // Above +6, clamp to top
    if (db < -60) return 1; // Below -60, clamp to bottom
    return 0.5; // Fallback
  };

  // Convert position to dB value
  const positionToDb = (position: number) => {
    const scaleMarkers = [
      { db: 6, position: 0 }, // +6 at top (0%)
      { db: 0, position: 0.25 }, // 0 at 25% from top
      { db: -20, position: 0.5 }, // -20 at 50% from top
      { db: -40, position: 0.75 }, // -40 at 75% from top
      { db: -60, position: 1 }, // -60 at bottom (100%)
    ];

    // Find the two markers that bracket our position
    for (let i = 0; i < scaleMarkers.length - 1; i++) {
      const current = scaleMarkers[i];
      const next = scaleMarkers[i + 1];

      if (
        position >= current.position &&
        position <= next.position
      ) {
        // Linear interpolation between the two markers
        const ratio =
          (position - current.position) /
          (next.position - current.position);
        return current.db + ratio * (next.db - current.db);
      }
    }

    // Handle edge cases
    if (position <= 0) return 6; // At top, return +6
    if (position >= 1) return -60; // At bottom, return -60
    return 0; // Fallback
  };

  const position = dbToPosition(value);
  const totalHeight = 332.667;
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
      const newPosition = Math.max(
        0,
        Math.min(1, y / trackHeight),
      );
      const newValue = positionToDb(newPosition);

      onChange(Math.max(-60, Math.min(6, newValue)));
    },
    [onChange, trackHeight],
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Handle double-click to reset fader to 0 dB
  const handleDoubleClick = useCallback(() => {
    onChange(0);
  }, [onChange]);

  // Add global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) =>
      handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    document.addEventListener(
      "mousemove",
      handleGlobalMouseMove,
    );
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener(
        "mousemove",
        handleGlobalMouseMove,
      );
      document.removeEventListener(
        "mouseup",
        handleGlobalMouseUp,
      );
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={faderRef}
      className="basis-0 grow h-[332.667px] min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[332.667px] items-center justify-start px-[3px] py-0 relative w-full">
          <Frame3
            height={topHeight}
            isDragging={isDragging.current}
          />
          <div
            className={`bg-[#dedede] h-5 rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-9 cursor-grab active:cursor-grabbing select-none z-10 ${!isDragging.current ? "transition-all duration-400 ease-out" : ""}`}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            title="Double-click to reset to 0 dB"
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
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div
      className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 h-[359px] items-center justify-start overflow-clip px-1.5 py-[13px] relative rounded-[5px] shrink-0 w-[69px]"
      data-name="Fader Wrapper"
    >
      <Fader value={value} onChange={onChange} />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function FaderWrapper1({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Fader Wrapper"
    >
      <FaderDbRange />
      <FaderWrapper value={value} onChange={onChange} />
      <div
        className="bg-[rgba(217,217,217,0)] h-[318px] shrink-0 w-[19px]"
        data-name="Spacer"
      />
    </div>
  );
}

function FaderContents({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-center justify-start left-[55px] p-0 top-[19px] w-[226px]"
      data-name="Fader Contents"
    >
      <CurrentDBWrapper value={value} />
      <FaderWrapper1 value={value} onChange={onChange} />
    </div>
  );
}

function FaderArea({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div
      className="bg-[#e8e8e8] h-[469px] relative rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full max-w-[336px] mx-auto"
      data-name="Fader Area"
    >
      <FaderContents value={value} onChange={onChange} />
    </div>
  );
}

function InstrumentButton({
  name,
  isSelected,
  onClick,
  gridArea,
}: {
  name: string;
  isSelected: boolean;
  onClick: () => void;
  gridArea: string;
}) {
  return (
    <div
      className={`${gridArea} ${isSelected ? "bg-[#fff2ea]" : "bg-[#e7e7e7]"} h-[47px] ml-0 relative rounded-md w-[151px] cursor-pointer ${!isSelected ? "opacity-[0.76]" : ""} transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98]`}
      data-name="Instrument Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-row h-[47px] items-center justify-between overflow-clip px-3 py-0 relative w-[151px]">
        <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[15px] text-left text-nowrap transition-all duration-300 ease-in-out">
          <p className="block leading-[normal] whitespace-pre">
            {name}
          </p>
        </div>
        <div className="transition-all duration-300 ease-in-out">
          {isSelected ? (
            <div
              className="h-[7px] relative shrink-0 w-2.5"
              data-name="Done Icon"
            >
              <div className="absolute bottom-[-7.143%] left-[-5%] right-[-5%] top-[-7.143%]">
                <svg
                  className="block size-full transition-all duration-300 ease-in-out"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 12 9"
                >
                  <path
                    d="M11 1L4.125 8L1 4.81818"
                    id="Done Icon"
                    stroke="var(--stroke-0, #383838)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div
              className="h-[7.847px] relative shrink-0 w-[8.25px]"
              data-name="Edit Icon"
            >
              <div className="absolute bottom-[-6.372%] left-[-6.061%] right-[-6.061%] top-[-6.372%]">
                <svg
                  className="block size-full transition-all duration-300 ease-in-out"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    d={svgPaths.p15739500}
                    id="Edit Icon"
                    stroke="var(--stroke-0, #383838)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      {isSelected && (
        <div className="absolute border border-[#e38c54] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] transition-all duration-300 ease-in-out" />
      )}
      {!isSelected && (
        <div className="absolute inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] transition-all duration-300 ease-in-out" />
      )}
    </div>
  );
}

function InstrumentButtons({
  selectedInstrument,
  onInstrumentSelect,
}: {
  selectedInstrument: string;
  onInstrumentSelect: (instrument: string) => void;
}) {
  const instruments = [
    { name: "Guitar 1", gridArea: "[grid-area:1_/_1] mt-0" },
    {
      name: "Guitar 2",
      gridArea: "[grid-area:1_/_1] mt-[78px]",
    },
    {
      name: "Guitar 3",
      gridArea: "[grid-area:1_/_1] mt-[163px]",
    },
  ];

  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Instrument Buttons"
    >
      {instruments.map((instrument) => (
        <InstrumentButton
          key={instrument.name}
          name={instrument.name}
          isSelected={selectedInstrument === instrument.name}
          onClick={() => onInstrumentSelect(instrument.name)}
          gridArea={instrument.gridArea}
        />
      ))}
    </div>
  );
}

function Contents() {
  const [selectedInstrument, setSelectedInstrument] =
    useState("Guitar 1");

  // Store fader levels for each instrument and control type
  const [instrumentLevels, setInstrumentLevels] = useState({
    "Guitar 1": 0, // Start at 0 dB
    "Guitar 2": 0, // Start at 0 dB
    "Guitar 3": 0, // Start at 0 dB
    Headphones: 0, // Start at 0 dB
    Backing: 0, // Start at 0 dB
  });

  // Get current instrument's fader level
  const currentFaderLevel =
    instrumentLevels[selectedInstrument];

  // Update fader level for current instrument
  const handleFaderChange = (value: number) => {
    setInstrumentLevels((prev) => ({
      ...prev,
      [selectedInstrument]: value,
    }));
  };

  return (
    <div
      className="box-border content-stretch flex flex-col gap-14 items-center justify-start p-4 w-full h-full overflow-auto"
      data-name="Contents"
    >
      <MenuBar
        selectedInstrument={selectedInstrument}
        onInstrumentSelect={setSelectedInstrument}
      />
      <FaderArea
        value={currentFaderLevel}
        onChange={handleFaderChange}
      />
      <InstrumentButtons
        selectedInstrument={selectedInstrument}
        onInstrumentSelect={setSelectedInstrument}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#f0f0f0] p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full"
      >
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full w-full bg-[#f9f9f9] overflow-clip relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <Contents />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full w-full bg-gray-100 rounded-[10px] border-2 border-dashed border-gray-300 flex items-center justify-center">
            <p className="text-gray-500">
              Drag the handle to resize the music interface
            </p>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}