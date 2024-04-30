import React, { Dispatch, SetStateAction } from "react";
import { Input } from "./ui/input";
import DateRangePicker from "./date-range-picker";
import { DateRange } from "react-day-picker";

const Filter = ({
  query,
  setquery,
  date,
  setDate,
}: {
  query: string;
  setquery: Dispatch<SetStateAction<string>>;
  date: DateRange | undefined;
  setDate: Dispatch<SetStateAction<DateRange | undefined>>;
}) => {
  return (
    <div className="flex justify-between">
      <Input
        className="w-1/2"
        placeholder="Search for a Case..."
        value={query}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setquery(event.target.value);
        }}
      />
      <DateRangePicker date={date} setDate={setDate} />
    </div>
  );
};

export default Filter;
