import svgPaths from "./svg-aajsno7s67";

function DbIndicator() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">2.4</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function CurrentDBWrapper() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[31.044px]"
      data-name="Current dB Wrapper"
    >
      <DbIndicator />
    </div>
  );
}

function TopFader() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Top Fader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[164px] items-center justify-start pb-1 pt-0 px-[11px] relative w-full">
          <div
            className="basis-0 bg-[#c7c7c7] grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaderHandle() {
  return (
    <div className="h-3.5 relative shrink-0 w-full" data-name="Fader Handle">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-3.5 items-start justify-start px-1.5 py-0 relative w-full">
          <div
            className="basis-0 bg-[#dedede] grow min-h-px min-w-px rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full"
            data-name="Fader Handle"
          />
        </div>
      </div>
    </div>
  );
}

function BottomFader() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Bottom Fader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[73px] items-center justify-start pb-0 pt-1 px-[11px] relative w-full">
          <div
            className="basis-0 bg-[#e38c54] grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fader() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative w-full">
          <TopFader />
          <FaderHandle />
          <BottomFader />
        </div>
      </div>
    </div>
  );
}

function FaderWrapper() {
  return (
    <div
      className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-1 py-[13px] relative rounded-[5px] shrink-0 w-[46px]"
      data-name="Fader Wrapper"
    >
      <Fader />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function CurrentDBWrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Current dB Wrapper"
    >
      <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[10px] text-center w-[90px]">
        <p className="block leading-[2]">
          {`Verb. `}
          <br />
          Dry / Wet
        </p>
      </div>
    </div>
  );
}

function FxControlFader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[26px] items-center justify-center p-0 relative shrink-0"
      data-name="FX Control Fader"
    >
      <CurrentDBWrapper />
      <FaderWrapper />
      <CurrentDBWrapper1 />
    </div>
  );
}

function DbIndicator1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">2.4</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function CurrentDBWrapper2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[31.044px]"
      data-name="Current dB Wrapper"
    >
      <DbIndicator1 />
    </div>
  );
}

function TopFader1() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Top Fader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[164px] items-center justify-start pb-1 pt-0 px-[11px] relative w-full">
          <div
            className="basis-0 bg-[#c7c7c7] grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaderHandle1() {
  return (
    <div className="h-3.5 relative shrink-0 w-full" data-name="Fader Handle">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-3.5 items-start justify-start px-1.5 py-0 relative w-full">
          <div
            className="basis-0 bg-[#dedede] grow min-h-px min-w-px rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full"
            data-name="Fader Handle"
          />
        </div>
      </div>
    </div>
  );
}

function BottomFader1() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Bottom Fader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[73px] items-center justify-start pb-0 pt-1 px-[11px] relative w-full">
          <div
            className="basis-0 bg-[#e38c54] grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fader1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative w-full">
          <TopFader1 />
          <FaderHandle1 />
          <BottomFader1 />
        </div>
      </div>
    </div>
  );
}

function FaderWrapper1() {
  return (
    <div
      className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-1 py-[13px] relative rounded-[5px] shrink-0 w-[46px]"
      data-name="Fader Wrapper"
    >
      <Fader1 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function CurrentDBWrapper3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Current dB Wrapper"
    >
      <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[10px] text-center w-[90px]">
        <p className="block leading-[2]">
          {`Verb. `}
          <br />
          Decay
        </p>
      </div>
    </div>
  );
}

function FxControlFader1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[26px] items-center justify-center p-0 relative shrink-0"
      data-name="FX Control Fader"
    >
      <CurrentDBWrapper2 />
      <FaderWrapper1 />
      <CurrentDBWrapper3 />
    </div>
  );
}

function DbIndicator2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">2.4</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function CurrentDBWrapper4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[31.044px]"
      data-name="Current dB Wrapper"
    >
      <DbIndicator2 />
    </div>
  );
}

function TopFader2() {
  return (
    <div className="h-[164px] relative shrink-0 w-full" data-name="Top Fader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[164px] items-center justify-start pb-1 pt-0 px-[11px] relative w-full">
          <div
            className="basis-0 bg-[#c7c7c7] grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaderHandle2() {
  return (
    <div className="h-3.5 relative shrink-0 w-full" data-name="Fader Handle">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-3.5 items-start justify-start px-1.5 py-0 relative w-full">
          <div
            className="basis-0 bg-[#dedede] grow min-h-px min-w-px rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full"
            data-name="Fader Handle"
          />
        </div>
      </div>
    </div>
  );
}

function BottomFader2() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Bottom Fader">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[73px] items-center justify-start pb-0 pt-1 px-[11px] relative w-full">
          <div
            className="basis-0 bg-[#e38c54] grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fader2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative w-full">
          <TopFader2 />
          <FaderHandle2 />
          <BottomFader2 />
        </div>
      </div>
    </div>
  );
}

function FaderWrapper2() {
  return (
    <div
      className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-1 py-[13px] relative rounded-[5px] shrink-0 w-[46px]"
      data-name="Fader Wrapper"
    >
      <Fader2 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function CurrentDBWrapper5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0"
      data-name="Current dB Wrapper"
    >
      <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[10px] text-center w-[90px]">
        <p className="block leading-[2]">
          Delay
          <br />
          Dry / Wet
        </p>
      </div>
    </div>
  );
}

function FxControlFader2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[26px] items-center justify-center p-0 relative shrink-0"
      data-name="FX Control Fader"
    >
      <CurrentDBWrapper4 />
      <FaderWrapper2 />
      <CurrentDBWrapper5 />
    </div>
  );
}

function FaderWrapper3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Fader Wrapper"
    >
      <FxControlFader />
      <FxControlFader1 />
      <FxControlFader2 />
    </div>
  );
}

function FaderContents() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 h-[450px] items-center justify-start left-[45px] p-0 top-[19px] w-[246px]"
      data-name="Fader Contents"
    >
      <FaderWrapper3 />
    </div>
  );
}

export default function FaderArea() {
  return (
    <div
      className="bg-[#e8e8e8] relative rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="Fader Area"
    >
      <FaderContents />
      <div
        className="absolute bottom-[93.177%] left-[89.583%] right-[4.613%] top-[4.051%]"
        data-name="Options Icon"
      >
        <div
          className="absolute bottom-[-7.692%] left-[-5.128%] right-[-5.128%] top-[-7.692%]"
          style={
            { "--stroke-0": "rgba(129, 129, 129, 1)" } as React.CSSProperties
          }
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            role="presentation"
            viewBox="0 0 22 15"
          >
            <path
              d={svgPaths.p2f041600}
              id="Options Icon"
              stroke="var(--stroke-0, #818181)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}