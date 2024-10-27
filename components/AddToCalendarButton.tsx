
"use client";

import React from "react";
import { Button } from "./ui/button";
import { createCalendarEvent } from "@/lib/googleCalendar";

type AddToCalendarButtonProps = {
  clerkUserId: string;
  email: string;
  startTime: Date;
  endTime: Date;
  eventName: string;
  eventLocation: string;
};

const AddToCalendarButton = ({
  clerkUserId,
  startTime,
  endTime,
  eventName,
  eventLocation,
}: AddToCalendarButtonProps) => {
  const handleAddToCalendar = async () => {
    const durationInMinutes = Math.round(
      (endTime.getTime() - startTime.getTime()) / 60000
    );

    try {
      await createCalendarEvent({
        clerkUserId,
        startTime,
        durationInMinutes,
        eventName,
        eventLocation,
      });

      alert("Event added to calendar!");
    } catch (error) {
      console.error("Error adding event to calendar", error);
      alert("Error adding event to calendar");
    }
  };

  return (
    <Button
      onClick={handleAddToCalendar}
      className="mt-4 p-2 bg-blue-500 text-white rounded-md"
    >
      Add to Calendar
    </Button>
  );
};

export default AddToCalendarButton;
