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
    <div className="wrapper my-8"></div>
    </>
  )
};

export default CreateEvent;
