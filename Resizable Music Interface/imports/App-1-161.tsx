import svgPaths from "./svg-t6e5grosb4";

function OtherControls() {
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
            <path d={svgPaths.p6e87800} fill="#653C3C" />
            <path d={svgPaths.p1ce17980} fill="var(--fill-0, #D1D1D1)" />
          </g>
          <g id="Music Icon">
            <path d={svgPaths.p3c9b9a00} fill="#653C3C" />
            <path d={svgPaths.p158e3500} fill="var(--fill-0, #D1D1D1)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuBar() {
  return (
    <div
      className="bg-[#fbfbfb] h-[63px] relative shrink-0 w-full"
      data-name="Menu Bar"
    >
      <div className="absolute border-[0px_0px_1px] border-[rgba(129,129,129,0.59)] border-solid inset-0 pointer-events-none shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[63px] items-center justify-between px-[33px] py-2 relative w-full">
          <div className="flex flex-col font-['Futura:Condensed_ExtraBold',_sans-serif] h-[33px] justify-center leading-[0] not-italic relative shrink-0 text-[#818181] text-[20px] text-center w-20">
            <p className="block leading-[normal]">Guitar 1</p>
          </div>
          <OtherControls />
        </div>
      </div>
    </div>
  );
}

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
        <p className="block leading-[normal] text-nowrap whitespace-pre">dB</p>
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

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pb-1 pt-0 px-0 relative shrink-0">
      <div
        className="bg-[#c7c7c7] h-[243px] relative rounded-[3px] shrink-0 w-[23px]"
        data-name="Fader Active"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px pb-0 pt-1 px-0 relative shrink-0">
      <div
        className="bg-[#e38c54] h-full relative rounded-[3px] shrink-0 w-[23px]"
        data-name="Fader Active"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
      </div>
    </div>
  );
}

function Fader() {
  return (
    <div
      className="basis-0 grow h-[332.667px] min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[332.667px] items-center justify-start px-[3px] py-0 relative w-full">
          <Frame3 />
          <div className="bg-[#dedede] h-5 rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-9" />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function FaderWrapper() {
  return (
    <div
      className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 h-[359px] items-center justify-start overflow-clip px-1.5 py-[13px] relative rounded-[5px] shrink-0 w-[69px]"
      data-name="Fader Wrapper"
    >
      <Fader />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function FaderWrapper1() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Fader Wrapper"
    >
      <FaderDbRange />
      <FaderWrapper />
      <div
        className="bg-[rgba(217,217,217,0)] h-[318px] shrink-0 w-[19px]"
        data-name="Spacer"
      />
    </div>
  );
}

function FaderContents() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-center justify-start left-[55px] p-0 top-[19px] w-[226px]"
      data-name="Fader Contents"
    >
      <CurrentDBWrapper />
      <FaderWrapper1 />
    </div>
  );
}

function FaderArea() {
  return (
    <div
      className="bg-[#e8e8e8] h-[469px] relative rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[336px]"
      data-name="Fader Area"
    >
      <FaderContents />
    </div>
  );
}

function InstrumentButton() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#fff2ea] h-[47px] ml-0 mt-0 relative rounded-md w-[151px]"
      data-name="Instrument Button"
    >
      <div className="box-border content-stretch flex flex-row h-[47px] items-center justify-between overflow-clip px-3 py-0 relative w-[151px]">
        <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[15px] text-left text-nowrap">
          <p className="block leading-[normal] whitespace-pre">Guitar 1</p>
        </div>
        <div className="h-[7px] relative shrink-0 w-2.5" data-name="Done Icon">
          <div className="absolute bottom-[-7.143%] left-[-5%] right-[-5%] top-[-7.143%]">
            <svg
              className="block size-full"
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
      </div>
      <div className="absolute border border-[#e38c54] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)]" />
    </div>
  );
}

function InstrumentButton1() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#e7e7e7] box-border content-stretch flex flex-row h-[47px] items-center justify-between ml-0 mt-[78px] opacity-[0.76] overflow-clip px-3 py-0 relative rounded-md shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] w-[151px]"
      data-name="Instrument Button"
    >
      <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Guitar 2</p>
      </div>
      <div
        className="h-[7.847px] relative shrink-0 w-[8.25px]"
        data-name="Edit Icon"
      >
        <div className="absolute bottom-[-6.372%] left-[-6.061%] right-[-6.061%] top-[-6.372%]">
          <svg
            className="block size-full"
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
    </div>
  );
}

function InstrumentButton2() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#e7e7e7] box-border content-stretch flex flex-row h-[47px] items-center justify-between ml-0 mt-[163px] opacity-[0.76] overflow-clip px-3 py-0 relative rounded-md shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] w-[151px]"
      data-name="Instrument Button"
    >
      <div className="font-['Futura:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#383838] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Guitar 3</p>
      </div>
      <div
        className="h-[7.847px] relative shrink-0 w-[8.25px]"
        data-name="Edit Icon"
      >
        <div className="absolute bottom-[-6.372%] left-[-6.061%] right-[-6.061%] top-[-6.372%]">
          <svg
            className="block size-full"
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
    </div>
  );
}

function InstrumentButtons() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Instrument Buttons"
    >
      <InstrumentButton />
      <InstrumentButton1 />
      <InstrumentButton2 />
    </div>
  );
}

function Contents() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-14 items-center justify-start left-0 p-0 top-0 w-[440px]"
      data-name="Contents"
    >
      <MenuBar />
      <FaderArea />
      <InstrumentButtons />
    </div>
  );
}

export default function App() {
  return (
    <div
      className="bg-[#f9f9f9] overflow-clip relative rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="APP"
    >
      <Contents />
    </div>
  );
}