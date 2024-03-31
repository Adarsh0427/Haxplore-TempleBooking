"use client";

import { useMemo, useState } from "react";
import { Range } from "react-date-range";
import { Calendar } from "react-date-range";
import {
  addDays,
  addHours,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  isSameMinute,
  parse,
  parseISO,
  set,
  startOfDay,
  startOfToday,
  startOfWeek,
} from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { TicketQrDialog } from "@/app/components/TicketQrDialog";
import generateQrCode from "./generateQrCode";

import { cn } from "../datepicker/libs/utils";
import Button from "../Button";
import { Reservation } from "@prisma/client";
import { SafeReservation } from "@/app/types";

interface TimeOption {
  value: string;
  label: string;
}

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
  onSelect: (date: Date) => void;
  handleTimeSelect: (time: Date) => void;
  reserved: SafeReservation[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  onSelect,
  disabled,
  handleTimeSelect,
  disableDates,
  reserved = [],
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onSelect(date);
  };

  const minSelectableDate = addDays(new Date(), 0);

  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", selectedDate);
  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });
  const reservations = [
    addHours(today, 5).toString(),
    addHours(today, 6).toString(),
    addHours(today, 7).toString(),
    addHours(today, 8).toString(),
    addHours(today, 9).toString(),
    addDays(new Date(addHours(today, 4)), 3).toString(),
  ];

  let [freeTimes, setFreeTimes] = useState<Date[]>([]);
  useMemo(() => {
    const StartOfToday = startOfDay(selectedDate);
    const endOfToday = endOfDay(selectedDate);
    const startHour = set(StartOfToday, { hours: 10 });
    const endHour = set(endOfToday, { hours: 17, minutes: 45 });
    let hoursInDay = eachMinuteOfInterval(
      {
        start: startHour,
        end: endHour,
      },
      { step: 30 }
    );

    let freeTimes = hoursInDay.filter(
      (hour) => !reservations.includes(parseISO(hour.toISOString()).toString())
    );
    setFreeTimes(freeTimes);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const handleTimeClick = (time: Date) => {
    setSelectedTime(time);
    handleTimeSelect(time);
  };

  const taxRate = 0.02;
  const taxPrice = price * taxRate;
  const total = (price + taxPrice).toFixed(2);

  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row justify-center gap-1 p-4">
        <div className="text-2xl font-semibold">Booking Date</div>
      </div>
      <hr />
      <Calendar
        color="#000"
        minDate={minSelectableDate}
        date={selectedDate}
        onChange={handleDateSelect}
      />
      <hr />

      <div>
        <div className="flex flex-col items-center gap-2 mt-4 p-4">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6  text-md gap-2">
            {freeTimes.map((hour, hourIdx) => {
              const isDisabled = reserved.some((reservation) =>
                isSameMinute(new Date(reservation.startTime), hour)
              );

              return (
                <div key={hourIdx}>
                  <button
                    type="button"
                    className={cn(
                      "bg-green-200 rounded-lg px-2 text-gray-800 relative hover:border hover:border-green-400 w-[60px] h-[26px]",
                      selectedTime &&
                        isSameMinute(selectedTime, hour) &&
                        "bg-black text-white",
                      isDisabled && "bg-gray-400 cursor-not-allowed"
                    )}
                    onClick={() => handleTimeClick(hour)}
                  >
                    {format(hour, "HH:mm")}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col p-2">
        <TicketQrDialog disabled={disabled} onSubmit={onSubmit}
          qrCode={
            // await generateQrCode("121123123")
            "data:image/png;base64,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"
          }
        />
        {/* <Button
          label="Reserve"
          disabled={disabled}
          onClick={() => {
            console.log("HERE");
            // onSubmit();
            
          }}
        /> */}
      </div>
    </div>
  );
};

export default ListingReservation;
