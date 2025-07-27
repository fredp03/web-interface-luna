import svgPaths from "./svg-zt7xzcz392";

function OptionsIconWrapper() {
  return (
    <div
      className="[grid-area:1_/_3] relative shrink-0"
      data-name="Options Icon Wrapper"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 117 51"
      >
        <g id="Options Icon Wrapper">
          <path
            d={svgPaths.p2db9cec0}
            id="Options Icon"
            stroke="var(--stroke-0, #818181)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function DBReading() {
  return (
    <div
      className="box-border gap-2.5 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[51px] max-h-[63px] overflow-clip p-0 relative shrink-0 w-full"
      data-name="dB Reading"
    >
      <OptionsIconWrapper />
    </div>
  );
}

function DbIndicator1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-[#818181] text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[16px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">2.4</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function FaderTopWrapper() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Top Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#c7c7c7] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
            data-name="Fader Top"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaderHandleWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Fader Handle Wrapper">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[9px] py-0 relative w-full">
          <div
            className="aspect-[41/20] bg-[#dedede] max-h-5 max-w-[41px] min-h-[13px] min-w-[26.65px] rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full"
            data-name="Fader Handle"
          />
        </div>
      </div>
    </div>
  );
}

function FaderActiveWrapper() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Active Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#e38c54] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
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
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative size-full">
          <FaderTopWrapper />
          <FaderHandleWrapper />
          <FaderActiveWrapper />
        </div>
      </div>
    </div>
  );
}

function Fader1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[13px] relative rounded-[5px] shrink-0 w-full"
      data-name="Fader"
    >
      <Fader />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function EffectLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] w-full"
      data-name="Effect Label"
    >
      <div className="font-['Afacad:Medium',_sans-serif] font-medium relative shrink-0 text-[13px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Reverb</p>
      </div>
      <div
        className="font-['Futura:Condensed_Medium',_sans-serif] min-w-full not-italic relative shrink-0 text-[10px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Dry / Wet</p>
      </div>
    </div>
  );
}

function EffectFader() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[18px] h-full items-center justify-start p-0 relative shrink-0 w-9"
      data-name="Effect Fader"
    >
      <DbIndicator1 />
      <Fader1 />
      <EffectLabel />
    </div>
  );
}

function DbIndicator2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-[#818181] text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[16px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">2.4</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function FaderTopWrapper1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Top Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#c7c7c7] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
            data-name="Fader Top"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaderHandleWrapper1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Fader Handle Wrapper">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[9px] py-0 relative w-full">
          <div
            className="aspect-[41/20] bg-[#dedede] max-h-5 max-w-[41px] min-h-[13px] min-w-[26.65px] rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full"
            data-name="Fader Handle"
          />
        </div>
      </div>
    </div>
  );
}

function FaderActiveWrapper1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Active Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#e38c54] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
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
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative size-full">
          <FaderTopWrapper1 />
          <FaderHandleWrapper1 />
          <FaderActiveWrapper1 />
        </div>
      </div>
    </div>
  );
}

function Fader3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[13px] relative rounded-[5px] shrink-0 w-full"
      data-name="Fader"
    >
      <Fader2 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function EffectLabel1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] w-full"
      data-name="Effect Label"
    >
      <div className="font-['Afacad:Medium',_sans-serif] font-medium relative shrink-0 text-[13px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Reverb</p>
      </div>
      <div
        className="font-['Futura:Condensed_Medium',_sans-serif] min-w-full not-italic relative shrink-0 text-[10px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Decay</p>
      </div>
    </div>
  );
}

function EffectFader1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[18px] h-full items-center justify-start p-0 relative shrink-0 w-9"
      data-name="Effect Fader"
    >
      <DbIndicator2 />
      <Fader3 />
      <EffectLabel1 />
    </div>
  );
}

function DbIndicator3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-[#818181] text-left text-nowrap"
      data-name="db indicator"
    >
      <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[16px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">2.4</p>
      </div>
      <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[12px]">
        <p className="block leading-[normal] text-nowrap whitespace-pre">%</p>
      </div>
    </div>
  );
}

function FaderTopWrapper2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Top Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#c7c7c7] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
            data-name="Fader Top"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FaderHandleWrapper2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Fader Handle Wrapper">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[9px] py-0 relative w-full">
          <div
            className="aspect-[41/20] bg-[#dedede] max-h-5 max-w-[41px] min-h-[13px] min-w-[26.65px] rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-full"
            data-name="Fader Handle"
          />
        </div>
      </div>
    </div>
  );
}

function FaderActiveWrapper2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Active Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[18px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#e38c54] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
            data-name="Fader Active"
          >
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Fader4() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Fader"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative size-full">
          <FaderTopWrapper2 />
          <FaderHandleWrapper2 />
          <FaderActiveWrapper2 />
        </div>
      </div>
    </div>
  );
}

function Fader5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px overflow-clip px-0 py-[13px] relative rounded-[5px] shrink-0 w-full"
      data-name="Fader"
    >
      <Fader4 />
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
    </div>
  );
}

function EffectLabel2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] w-full"
      data-name="Effect Label"
    >
      <div className="font-['Afacad:Medium',_sans-serif] font-medium relative shrink-0 text-[13px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Delay</p>
      </div>
      <div
        className="font-['Futura:Condensed_Medium',_sans-serif] min-w-full not-italic relative shrink-0 text-[10px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[normal]">Dry / Wet</p>
      </div>
    </div>
  );
}

function EffectFader2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-[18px] h-full items-center justify-start p-0 relative shrink-0 w-9"
      data-name="Effect Fader"
    >
      <DbIndicator3 />
      <Fader5 />
      <EffectLabel2 />
    </div>
  );
}

function EffectFaderWrapper() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Effect Fader Wrapper"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-16 items-center justify-center px-7 py-0 relative size-full">
          <EffectFader />
          <EffectFader1 />
          <EffectFader2 />
        </div>
      </div>
    </div>
  );
}

export default function FaderArea() {
  return (
    <div
      className="bg-[#d4cbc4] relative rounded-[29px] shadow-[1px_1px_2px_0px_rgba(255,255,255,0.3),-1px_-1px_2px_0px_rgba(144,138,133,0.5)] size-full"
      data-name="Fader Area"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-8 pt-[18px] px-[19px] relative size-full">
          <DBReading />
          <EffectFaderWrapper />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(144,138,133,0.2),1px_-1px_2px_0px_inset_rgba(144,138,133,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(144,138,133,0.9)]" />
    </div>
  );
}