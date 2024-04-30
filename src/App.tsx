import "./App.css";
import { useTheme } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import Moon from "./icons/moon";
import Sun from "./icons/sun";
import { cn } from "./lib/utils";
import ReportedBikeThefts from "./pages/reported-bike-thefts";

function App() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex flex-col p-5">
      <div className="flex">
        <h1 className="text-primary text-5xl mx-auto">Reported Bike Thefts</h1>
        <Button
          className={cn(
            "bg-transparent rounded-full w-fit h-fit shadow-none hover:bg-transparent p-1"
          )}
          onClick={() =>
            theme === "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme === "dark" ? (
            <Sun className="w-5" color="white" />
          ) : (
            <>
              <Moon className="w-5" color="black" />
            </>
          )}
        </Button>
      </div>
      <h6 className="mx-auto my-5">Track All Theft Bikes</h6>
      <ReportedBikeThefts />
    </div>
  );
}

export default App;
