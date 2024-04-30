import React, { Dispatch, SetStateAction } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";

export interface Type extends React.HTMLAttributes<HTMLDivElement> {
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
}
const DateRangePicker = ({ className, date, setDate }: Type) => {
  // const [date, setDate] = React.useState<DateRange | undefined>({
  //   from: new Date(2022, 0, 20),
  //   to: addDays(new Date(2022, 0, 20), 20),
  // });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-2 flex flex-col" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <Button
            className="ml-auto"
            onClick={() => {
              setDate(undefined);
            }}
          >
            Clear
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
