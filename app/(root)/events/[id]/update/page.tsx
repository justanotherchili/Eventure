import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const UpdateEvent = () => {
  const { sessionClaims }  = auth()
  const userId = sessionClaims?.userId as string

  return(
    <>
    <section>
      <h3 className="wrapper h3-bold text-left">Update Event</h3>
    </section>
    <div className="wrapper my-8">
      <EventForm userId={userId} type="Update"/>
    </div>
    </>
  )
};

export default UpdateEvent;
