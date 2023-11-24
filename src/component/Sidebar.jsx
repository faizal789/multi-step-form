import { useSelector } from "react-redux";

const Sidebar = () => {
  const { pageOne, pageTwo, pageThree, pageFour } = useSelector(
    (store) => store.step
  );

  return (
    <nav>
      <div className="bg-sidebar-desktop max-lg:bg-none max-lg:p-0 bg-no-repeat h-full py-7 pl-7 pr-28">
        <div className="flex flex-col max-lg:flex-row max-lg:justify-center gap-3 max-lg:absolute max-lg:top-14 max-lg:left-0 max-lg:right-0 max-lg:mx-auto">
          <div className="flex items-center gap-4">
            <span
              style={{
                backgroundColor: pageOne ? "hsl(206, 94%, 87%)" : "",
                color: pageOne ? "hsl(213, 96%, 18%)" : "",
              }}
              className="w-8 h-8 text-center leading-8 font-medium tex rounded-full border text-white"
            >
              1
            </span>
            <div>
              <p className="max-lg:hidden">STEP 1</p>
              <h2 className="max-lg:hidden">YOUR INFO</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span
              style={{
                backgroundColor: pageTwo ? "hsl(206, 94%, 87%)" : "",
                color: pageTwo ? "hsl(213, 96%, 18%)" : "",
              }}
              className="w-8 h-8 text-center leading-8 font-medium tex rounded-full border text-white"
            >
              2
            </span>
            <div>
              <p className="max-lg:hidden">STEP 2</p>
              <h2 className="max-lg:hidden">SELECT PLAN</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span
              style={{
                backgroundColor: pageThree ? "hsl(206, 94%, 87%)" : "",
                color: pageThree ? "hsl(213, 96%, 18%)" : "",
              }}
              className="w-8 h-8 text-center leading-8 font-medium tex rounded-full border text-white"
            >
              3
            </span>
            <div>
              <p className="max-lg:hidden">STEP 3</p>
              <h2 className="max-lg:hidden">ADD-ONS</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span
              style={{
                backgroundColor: pageFour ? "hsl(206, 94%, 87%)" : "",
                color: pageFour ? "hsl(213, 96%, 18%)" : "",
              }}
              className="w-8 h-8 text-center leading-8 font-medium tex rounded-full border text-white"
            >
              4
            </span>
            <div>
              <p className="max-lg:hidden">STEP 4</p>
              <h2 className="max-lg:hidden">SUMMARY</h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
