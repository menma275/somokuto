import DisplayText from "./components/DisplayText";
import Toast from "./components/Toast";
import Info from "./components/Info";
import { Data } from "./types/data";
import data from "./assets/data.json";

function App() {
  const somokuto: Data = data;
  return (
    <>
      <div className="font-shippori fixed top-0 left-0 w-full h-[100dvh] noise-bg text-neutral-500">
        <Toast />
        <Info />
        <div className="mix-blend-multiply">
          <div className="fixed right-6 top-6 h-full flex flex-col justify-between">
            <h1 className="text-xs font-light tracking-[0.5rem] vertical-rl cursor-default">
              草木塔
            </h1>
          </div>
          <DisplayText somokuto={somokuto.somokuto} />
        </div>
      </div>
    </>
  );
}

export default App;
