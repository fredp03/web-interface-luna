import svgPaths from "./svg-vjv764u6yl";

interface FaderAreaProps {
  volumeLevel?: string;
}

function FaderArea({ volumeLevel = "2.4" }: FaderAreaProps) {
  return (
    <div
      className="relative rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="Fader Area"
    >
      <div
        className="absolute box-border content-stretch flex flex-col gap-4 items-center justify-start left-[55px] p-0 top-[19px] w-[226px]"
        data-name="Fader Contents"
      >
        <div
          className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center p-0 relative shrink-0 w-[31.044px]"
          data-name="Current dB Wrapper"
        >
          <div
            className="box-border content-stretch flex flex-col gap-[3px] items-end justify-center leading-[0] not-italic p-0 relative shrink-0 text-left text-nowrap"
            data-name="db indicator"
          >
            <div className="font-['Futura:Condensed_ExtraBold',_sans-serif] relative shrink-0 text-[#383838] text-[16px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                {volumeLevel}
              </p>
            </div>
            <div className="font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[#818181] text-[12px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                dB
              </p>
            </div>
          </div>
        </div>
        <div
          className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
          data-name="Fader Wrapper"
        >
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
          <div
            className="bg-[#d5d5d5] box-border content-stretch flex flex-row gap-2.5 h-[359px] items-center justify-start overflow-clip px-1.5 py-[13px] relative rounded-[5px] shrink-0 w-[69px]"
            data-name="Fader Wrapper"
          >
            <div
              className="basis-0 grow h-[332.667px] min-h-px min-w-px relative shrink-0"
              data-name="Fader"
            >
              <div className="flex flex-col items-center relative size-full">
                <div className="box-border content-stretch flex flex-col h-[332.667px] items-center justify-start px-[3px] py-0 relative w-full">
                  <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start pb-1 pt-0 px-0 relative shrink-0">
                    <div
                      className="bg-[#c7c7c7] h-[243px] relative rounded-[3px] shrink-0 w-[23px]"
                      data-name="Fader Active"
                    >
                      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(147,147,147,0.2),1px_-1px_2px_0px_inset_rgba(147,147,147,0.2),-1px_-1px_2px_0px_inset_rgba(251,251,251,0.9),1px_1px_3px_0px_inset_rgba(147,147,147,0.9)]" />
                    </div>
                  </div>
                  <div className="bg-[#dedede] h-5 rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-9" />
                  <div className="basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-start min-h-px min-w-px pb-0 pt-1 px-0 relative shrink-0">
                    <div
                      className="bg-[#e38c54] h-full relative rounded-[3px] shrink-0 w-[23px]"
                      data-name="Fader Active"
                    >
                      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(161,99,60,0.2),1px_-1px_2px_0px_inset_rgba(161,99,60,0.2),-1px_-1px_2px_0px_inset_rgba(255,181,108,0.9),1px_1px_3px_0px_inset_rgba(161,99,60,0.9)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(158,158,158,0.2),1px_-1px_2px_0px_inset_rgba(158,158,158,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(158,158,158,0.9)]" />
          </div>
          <div
            className="bg-[rgba(217,217,217,0)] h-[318px] shrink-0 w-[19px]"
            data-name="Spacer"
          />
        </div>
      </div>
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

export default function FaderArea1() {
  return (
    <div
      className="bg-[#e8e8e8] relative rounded-[9px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full"
      data-name="Fader Area"
    >
      <FaderArea />
    </div>
  );
}