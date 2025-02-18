import EventForm from "@/components/EventForm";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const CreateEvent = () => {
  const { sessionClaims }  = auth()
  const userId = sessionClaims?.userId as string

  return(
    <>
    <section>
      <h3 className="wrapper h3-bold text-left">Create Event</h3>
    </section>
    <div className="wrapper my-8">
      <EventForm userId={userId} type="Create"/>
    </div>
    </>
  )
};

export default CreateEvent;
