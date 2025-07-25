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

export default function Fader() {
  return (
    <div className="relative size-full" data-name="Fader">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-[3px] py-0 relative size-full">
          <Frame3 />
          <div className="bg-[#dedede] h-5 rounded shadow-[0px_1px_2px_0px_rgba(60,64,67,0.3),0px_2px_6px_2px_rgba(60,64,67,0.15)] shrink-0 w-9" />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}