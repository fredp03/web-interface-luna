import svgPaths from "./svg-ru6zz6su49";

interface ButtonComponentProps {
  buttonLabel?: string;
}

function ButtonComponent({ buttonLabel = "Monitor" }: ButtonComponentProps) {
  return (
    <div
      className="box-border content-stretch flex flex-col items-center justify-between p-0 relative size-full"
      data-name="Button Component"
    >
      <div className="relative shrink-0 size-[42px]" data-name="Button">
        <div className="absolute bottom-[-9.524%] left-[-7.143%] right-[-9.524%] top-[-7.143%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 49 49"
          >
            <g filter="url(#filter0_dddd_1_468)" id="Button">
              <rect
                fill="var(--fill-0, #D8CFC8)"
                height="42"
                rx="9"
                width="42"
                x="3"
                y="3"
              />
              <rect
                height="41"
                rx="8.5"
                stroke="var(--stroke-0, #DCC7B6)"
                width="41"
                x="3.5"
                y="3.5"
              />
              <path
                d={svgPaths.pcd3f280}
                id="Monitor Icon"
                stroke="var(--stroke-0, #53453B)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="49"
                id="filter0_dddd_1_468"
                width="49"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="1" dy="1" />
                <feGaussianBlur stdDeviation="1.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.9 0"
                />
                <feBlend
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="effect1_dropShadow_1_468"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="-1" dy="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.984314 0 0 0 0 0.941176 0 0 0 0 0.909804 0 0 0 0.9 0"
                />
                <feBlend
                  in2="effect1_dropShadow_1_468"
                  mode="normal"
                  result="effect2_dropShadow_1_468"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="1" dy="-1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0"
                />
                <feBlend
                  in2="effect2_dropShadow_1_468"
                  mode="normal"
                  result="effect3_dropShadow_1_468"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="-1" dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0"
                />
                <feBlend
                  in2="effect3_dropShadow_1_468"
                  mode="normal"
                  result="effect4_dropShadow_1_468"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect4_dropShadow_1_468"
                  mode="normal"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="font-['Alegreya_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{buttonLabel}</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative shrink-0"
      data-name="Status"
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
            fill="var(--fill-0, #91DC87)"
            id="Ellipse 1"
            r="6.5"
          />
        </svg>
      </div>
      <div className="font-['Anonymous_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292d32] text-[11px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Connected</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-2 relative shrink-0 w-full">
      <div className="font-['Anonymous_Pro:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[24px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">User</p>
      </div>
      <Status />
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
      className="[grid-area:1_/_2] box-border content-stretch flex flex-col gap-2.5 items-center justify-end p-0 relative self-center shrink-0"
      data-name="Current dB Wrapper"
    >
      <DbIndicator />
    </div>
  );
}

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
  );
}

function DBReading() {
  return (
    <div
      className="basis-0 box-border gap-2.5 grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] grow max-h-[63px] min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full"
      data-name="dB Reading"
    >
      <CurrentDBWrapper />
      <OptionsIconWrapper />
    </div>
  );
}

function FaderDbRange() {
  return (
    <div
      className="[grid-area:1_/_1] opacity-[0.68] relative shrink-0"
      data-name="Fader DB Range"
    >
      <div className="flex flex-col items-end relative size-full">
        <div className="box-border content-stretch flex flex-col font-['Futura:Medium',_sans-serif] items-end justify-between leading-[0] not-italic p-[12px] relative size-full text-[#818181] text-[13px] text-left text-nowrap">
          <div className="relative shrink-0">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              +6
            </p>
          </div>
          <div className="relative shrink-0">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              0
            </p>
          </div>
          <div className="relative shrink-0">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              -20
            </p>
          </div>
          <div className="relative shrink-0">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              -40
            </p>
          </div>
          <div className="relative shrink-0">
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              -60
            </p>
          </div>
        </div>
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
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-0 relative size-full">
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
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-0.5 py-0 relative w-full">
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
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[30px] py-0 relative size-full">
          <div
            className="basis-0 bg-[#d1624f] grow h-full max-w-6 min-h-px min-w-3 relative rounded-[3px] shrink-0"
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
      className="[grid-area:1_/_2] box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip px-0 py-[13px] relative rounded-[5px] shrink-0"
      data-name="Fader"
    >
      <Fader />
    </div>
  );
}

function FaderWrapper() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Fader Wrapper"
    >
      <div className="relative size-full">
        <div className="box-border gap-[29px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] px-3.5 py-[9px] relative size-full">
          <FaderDbRange />
          <Fader1 />
        </div>
      </div>
    </div>
  );
}

function FaderArea() {
  return (
    <div
      className="basis-0 bg-[#d4cbc4] grow min-h-px min-w-px relative rounded-[29px] shadow-[1px_1px_2px_0px_rgba(255,255,255,0.3),-1px_-1px_2px_0px_rgba(144,138,133,0.5)] shrink-0 w-full"
      data-name="Fader Area"
    >
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start pb-8 pt-[18px] px-[19px] relative size-full">
          <DBReading />
          <FaderWrapper />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[-1px_1px_2px_0px_inset_rgba(144,138,133,0.2),1px_-1px_2px_0px_inset_rgba(144,138,133,0.2),-1px_-1px_2px_0px_inset_rgba(255,255,255,0.9),1px_1px_3px_0px_inset_rgba(144,138,133,0.9)]" />
    </div>
  );
}

function AvailableTrack() {
  return (
    <div
      className="bg-[#d4cbc4] h-[34px] max-h-[34px] opacity-80 relative rounded-md shrink-0 w-full"
      data-name="Available Track"
    >
      <div className="absolute border-[#dcc7b6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center max-h-inherit relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34px] items-center justify-between max-h-inherit px-[29px] py-[5px] relative w-full">
          <div className="font-['Futura:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Guitar 1</p>
          </div>
          <div className="h-2.5 relative shrink-0 w-3" data-name="Mute Button">
            <div className="absolute bottom-[-5.007%] left-[-4.167%] right-[-4.167%] top-[-5.007%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 12"
              >
                <path
                  d={svgPaths.p10f8c700}
                  id="Mute Button"
                  stroke="var(--stroke-0, #292D32)"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-3" data-name="Solo Button">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12 12"
            >
              <g id="Solo Button">
                <path d={svgPaths.p1c850000} fill="var(--fill-0, #292D32)" />
                <path d={svgPaths.p32fd0ee0} fill="var(--fill-0, #292D32)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_1.3px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function AvailableTrack1() {
  return (
    <div
      className="bg-[#efe5dd] h-[34px] relative rounded-md shrink-0 w-full"
      data-name="Available Track"
    >
      <div className="absolute border-[#dcc7b6] border-[0.5px] border-solid inset-0 pointer-events-none rounded-md shadow-[0px_1px_3.5px_0px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row h-[34px] items-center justify-between px-[29px] py-[5px] relative w-full">
          <div className="font-['Futura:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
            <p className="block leading-[normal] whitespace-pre">Guitar 1</p>
          </div>
          <div className="h-2.5 relative shrink-0 w-3" data-name="Mute Button">
            <div className="absolute bottom-[-5.007%] left-[-4.167%] right-[-4.167%] top-[-5.007%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 14 12"
              >
                <path
                  d={svgPaths.p10f8c700}
                  id="Mute Button"
                  stroke="var(--stroke-0, #292D32)"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-3" data-name="Solo Button">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12 12"
            >
              <g id="Solo Button">
                <path d={svgPaths.p1c850000} fill="var(--fill-0, #292D32)" />
                <path d={svgPaths.p32fd0ee0} fill="var(--fill-0, #292D32)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_1.3px_0px_inset_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function AvailableTrackGroup() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-center justify-between max-h-[248px] min-h-px min-w-px px-0 py-[27px] relative shrink-0 w-full"
      data-name="Available Track Group"
    >
      <AvailableTrack />
      <AvailableTrack1 />
      <AvailableTrack />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="Button">
      <div className="absolute bottom-[-9.524%] left-[-7.143%] right-[-9.524%] top-[-7.143%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 49 49"
        >
          <g filter="url(#filter0_dddd_1_487)" id="Button">
            <rect
              fill="var(--fill-0, #D8CFC8)"
              height="42"
              rx="9"
              width="42"
              x="3"
              y="3"
            />
            <rect
              height="41"
              rx="8.5"
              stroke="var(--stroke-0, #DCC7B6)"
              width="41"
              x="3.5"
              y="3.5"
            />
            <path
              d={svgPaths.p1d4b0300}
              id="Backing Icon"
              stroke="var(--stroke-0, #1E1E1E)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="49"
              id="filter0_dddd_1_487"
              width="49"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.9 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_487"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-1" dy="-1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.984314 0 0 0 0 0.941176 0 0 0 0 0.909804 0 0 0 0.9 0"
              />
              <feBlend
                in2="effect1_dropShadow_1_487"
                mode="normal"
                result="effect2_dropShadow_1_487"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="1" dy="-1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0"
              />
              <feBlend
                in2="effect2_dropShadow_1_487"
                mode="normal"
                result="effect3_dropShadow_1_487"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0"
              />
              <feBlend
                in2="effect3_dropShadow_1_487"
                mode="normal"
                result="effect4_dropShadow_1_487"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect4_dropShadow_1_487"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ButtonComponent1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-col h-[71px] items-center justify-between p-0 place-self-center relative shrink-0 w-[63.667px]"
      data-name="Button Component"
    >
      <Button />
      <div className="font-['Alegreya_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Effects</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="Button">
      <div className="absolute bottom-[-9.524%] left-[-7.143%] right-[-9.524%] top-[-7.143%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 49 49"
        >
          <g filter="url(#filter0_dddd_1_487)" id="Button">
            <rect
              fill="var(--fill-0, #D8CFC8)"
              height="42"
              rx="9"
              width="42"
              x="3"
              y="3"
            />
            <rect
              height="41"
              rx="8.5"
              stroke="var(--stroke-0, #DCC7B6)"
              width="41"
              x="3.5"
              y="3.5"
            />
            <path
              d={svgPaths.p1d4b0300}
              id="Backing Icon"
              stroke="var(--stroke-0, #1E1E1E)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="49"
              id="filter0_dddd_1_487"
              width="49"
              x="0"
              y="0"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.9 0"
              />
              <feBlend
                in2="BackgroundImageFix"
                mode="normal"
                result="effect1_dropShadow_1_487"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-1" dy="-1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.984314 0 0 0 0 0.941176 0 0 0 0 0.909804 0 0 0 0.9 0"
              />
              <feBlend
                in2="effect1_dropShadow_1_487"
                mode="normal"
                result="effect2_dropShadow_1_487"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="1" dy="-1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0"
              />
              <feBlend
                in2="effect2_dropShadow_1_487"
                mode="normal"
                result="effect3_dropShadow_1_487"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dx="-1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.709804 0 0 0 0 0.682353 0 0 0 0 0.658824 0 0 0 0.2 0"
              />
              <feBlend
                in2="effect3_dropShadow_1_487"
                mode="normal"
                result="effect4_dropShadow_1_487"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect4_dropShadow_1_487"
                mode="normal"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ButtonComponent2() {
  return (
    <div
      className="[grid-area:1_/_3] box-border content-stretch flex flex-col h-[71px] items-center justify-between p-0 place-self-center relative shrink-0 w-[63.667px]"
      data-name="Button Component"
    >
      <Button2 />
      <div className="font-['Alegreya_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#53453b] text-[11px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">Backing</p>
      </div>
    </div>
  );
}

function MonitorButtons() {
  return (
    <div
      className="box-border gap-[15px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[112px] h-28 p-0 relative shrink-0 w-full"
      data-name="Monitor Buttons"
    >
      <ButtonComponent1 />
      <div
        className="[grid-area:1_/_2] box-border content-stretch flex flex-col h-[71px] items-center justify-between p-0 place-self-center relative shrink-0 w-[63.667px]"
        data-name="Button Component"
      >
        <ButtonComponent />
      </div>
      <ButtonComponent2 />
    </div>
  );
}

function IPhone16ProMax1() {
  return (
    <div
      className="absolute bg-[#e0d7ce] box-border content-stretch flex flex-col gap-[26px] h-[1019px] items-center justify-start left-0 overflow-clip px-[29px] py-[30px] top-0 w-[421px]"
      data-name="iPhone 16 Pro Max - 1"
    >
      <Frame1 />
      <FaderArea />
      <AvailableTrackGroup />
      <MonitorButtons />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <IPhone16ProMax1 />
    </div>
  );
}