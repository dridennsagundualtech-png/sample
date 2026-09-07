import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bean, Bike, Milk } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const SIZES = ["S", "M", "L"] as const;
type Size = (typeof SIZES)[number];

const SHORT_DESCRIPTION =
  "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo..";
const FULL_DESCRIPTION =
  "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam should be steamed to be dense and hot, with a temperature of between 60 and 65 °C (140 and 149 °F).";

const PERKS = [
  { icon: Bike, label: "Fast Delivery" },
  { icon: Bean, label: "Quality Bean" },
  { icon: Milk, label: "Extra Milk" },
];

export default function Index() {
  const navigate = useNavigate();
  const [size, setSize] = useState<Size>("M");
  const [isFavourite, setIsFavourite] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleBuyNow = () => {
    toast.success("Added to your order", {
      description: `Caffe Mocha · Size ${size} · $ 4.53`,
    });
  };

  return (
    <div className="flex min-h-screen w-full justify-center bg-[#EFEAE4] sm:py-10">
      <div className="flex w-full max-w-[430px] flex-col bg-surface sm:my-auto sm:h-[812px] sm:overflow-hidden sm:rounded-[40px] sm:shadow-2xl">
        <header className="flex shrink-0 items-center justify-between gap-4 px-6 pb-2 pt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="flex items-center justify-center rounded-xl p-2.5 text-ink transition-colors hover:bg-black/5"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
                fill="currentColor"
              />
            </svg>
          </button>
          <h1 className="text-base font-semibold text-ink">Detail</h1>
          <button
            type="button"
            onClick={() => setIsFavourite((v) => !v)}
            aria-label="Toggle favourite"
            aria-pressed={isFavourite}
            className={cn(
              "flex items-center justify-center rounded-xl p-2.5 transition-colors hover:bg-black/5",
              isFavourite ? "text-brand" : "text-ink",
            )}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <mask
                id="favourite-mask"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="3"
                width="21"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 2.9999H22.4725V22.5009H2V2.9999Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#favourite-mask)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.82371 12.123C5.22571 16.485 10.7647 20.012 12.2367 20.885C13.7137 20.003 19.2927 16.437 20.6497 12.127C21.5407 9.341 20.7137 5.812 17.4277 4.753C15.8357 4.242 13.9787 4.553 12.6967 5.545C12.4287 5.751 12.0567 5.755 11.7867 5.551C10.4287 4.53 8.65471 4.231 7.03771 4.753C3.75671 5.811 2.93271 9.34 3.82371 12.123ZM12.2377 22.501C12.1137 22.501 11.9907 22.471 11.8787 22.41C11.5657 22.239 4.19271 18.175 2.39571 12.581C2.39471 12.581 2.39471 12.58 2.39471 12.58C1.26671 9.058 2.52271 4.632 6.57771 3.325C8.48171 2.709 10.5567 2.98 12.2347 4.039C13.8607 3.011 16.0207 2.727 17.8867 3.325C21.9457 4.634 23.2057 9.059 22.0787 12.58C20.3397 18.11 12.9127 22.235 12.5977 22.408C12.4857 22.47 12.3617 22.501 12.2377 22.501Z"
                  fill={isFavourite ? "currentColor" : "#2A2A2A"}
                />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.1537 10.6249C17.7667 10.6249 17.4387 10.3279 17.4067 9.9359C17.3407 9.1139 16.7907 8.4199 16.0077 8.1669C15.6127 8.0389 15.3967 7.6159 15.5237 7.2229C15.6527 6.8289 16.0717 6.6149 16.4677 6.7389C17.8307 7.1799 18.7857 8.3869 18.9027 9.8139C18.9357 10.2269 18.6287 10.5889 18.2157 10.6219C18.1947 10.6239 18.1747 10.6249 18.1537 10.6249Z"
                fill={isFavourite ? "currentColor" : "#2A2A2A"}
              />
            </svg>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto px-6 pb-6 pt-4">
          <div className="flex flex-col gap-6">
            <div className="aspect-[327/202] w-full overflow-hidden rounded-2xl">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c75912623680284b617b589e930344166ec13e43?width=654"
                alt="Caffe Mocha"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="truncate text-xl font-semibold text-ink">
                      Caffe Mocha
                    </h2>
                    <span className="text-xs text-ink-muted">Ice/Hot</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65834 14.0917 6.73334L16.75 7.17501C18.45 7.45834 18.85 8.69168 17.625 9.90834L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63332 16.05 9.17499 16.3167L6.68332 17.7917C4.89999 18.85 3.81665 18.0583 4.28332 16.0417L4.87499 13.4833C4.98332 13 4.79165 12.325 4.44165 11.975L2.37499 9.90834C1.15832 8.69168 1.54999 7.45834 3.24999 7.17501L5.90832 6.73334C6.34999 6.65834 6.88332 6.26668 7.08332 5.85835L8.54999 2.92501C9.34999 1.33335 10.65 1.33335 11.4417 2.92501Z"
                        fill="#FBBE21"
                      />
                    </svg>
                    <span className="text-xs text-ink-muted">
                      <span className="text-base font-semibold text-[#2A2A2A]">
                        4.8{" "}
                      </span>
                      (230)
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-3">
                  {PERKS.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      aria-label={label}
                      title={label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDEDED]/35"
                    >
                      <Icon className="h-5 w-5 text-brand" strokeWidth={1.75} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-px w-full bg-line" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-ink">Description</h3>
              <p className="text-sm font-light leading-[150%] text-ink-muted">
                {expanded ? FULL_DESCRIPTION : SHORT_DESCRIPTION}{" "}
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="font-semibold text-brand"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-ink">Size</h3>
              <div className="flex items-center gap-4">
                {SIZES.map((option) => {
                  const active = option === size;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSize(option)}
                      aria-pressed={active}
                      className={cn(
                        "flex h-[41px] flex-1 items-center justify-center rounded-xl border text-sm transition-colors sm:flex-none sm:w-24",
                        active
                          ? "border-brand bg-brand-light text-brand"
                          : "border-line bg-white text-ink",
                      )}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        <footer className="flex shrink-0 items-center gap-6 rounded-t-2xl bg-white px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4 shadow-[0_-8px_24px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm text-ink-subtle">Price</span>
            <span className="text-lg font-semibold text-brand">$ 4.53</span>
          </div>
          <button
            type="button"
            onClick={handleBuyNow}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand py-4 text-base font-semibold text-white transition-transform hover:brightness-105 active:scale-[0.98]"
          >
            Buy Now
          </button>
        </footer>
      </div>
    </div>
  );
}
