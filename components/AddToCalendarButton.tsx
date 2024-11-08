"use client";

import { SignedIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

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
  const formatDate = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d{3}/g, "");

  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventName
  )}&dates=${formatDate(startTime)}/${formatDate(
    endTime
  )}&location=${encodeURIComponent(location)}&details=${encodeURIComponent(
    description
  )}`;

  return (
    <SignedIn>
      <Link href={calendarUrl} target="_blank">
        <Image 
        src="/assets/icons/add-calendar.svg"
        alt="Add to calendar"
        width={30}
        height={30}
        />
      </Link>
    </SignedIn>
  );
};

export default AddToCalendarButton;
