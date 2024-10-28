"use client";

import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";

type AddToCalendarButtonProps = {
  startTime: Date;
  endTime: Date;
  eventName: string;
  location: string;
  description?: string;
};

const AddToCalendarButton = ({
  startTime,
  endTime,
  eventName,
  location,
  description = "",
}: AddToCalendarButtonProps) => {
  const handleAddToCalendar = () => {
    const formatDate = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d{3}/g, "");

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventName
    )}&dates=${formatDate(startTime)}/${formatDate(
      endTime
    )}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(
      description
    )}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <SignedIn>
      <Button
        onClick={handleAddToCalendar}
        className="button"
      >
        Add to Calendar
      </Button>
    </SignedIn>
  );
};

export default AddToCalendarButton;
