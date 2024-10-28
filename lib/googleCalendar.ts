"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";



const getOAuthClient = async (clerkUserId: string) => {
  console.log("Getting OAuthClient")
  console.log(clerkUserId)
  console.log(clerkClient().users.getUserOauthAccessToken)
  const token = await clerkClient().users.getUserOauthAccessToken(clerkUserId, "oauth_google");
  console.log(`TOKEN: ${token}`)
  if (token.data.length === 0 || token.data[0].token === null) {
    throw new Error("No OAuth token found for user");
  }
  
  const client = new google.auth.OAuth2(
    process.env.GOOGLE_OAUTH_CLIENT_ID,
    process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    process.env.GOOGLE_OAUTH_CLIENT_REDIRECT_URL
  );
  client.setCredentials({ access_token: token.data[0].token });
  return client;
};


export const createCalendarEvent = async ({
  clerkUserId,
  startTime,
  endTime,
  eventName,
  eventLocation,
}: {
  clerkUserId: string;
  startTime: Date;
  endTime: Date;
  eventName: string;
  eventLocation: string;
}) => {

  const oAuthClient = await getOAuthClient(clerkUserId);
  console.log()
  const calendarEvent = await google.calendar("v3").events.insert({
    calendarId: "primary",
    auth: oAuthClient,
    requestBody: {
      summary: eventName, 
      location: eventLocation, 
      start: {
        dateTime: startTime.toISOString(),
        timeZone: "Europe/London"
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: "Europe/London"
      },
    },
  });

  console.log(calendarEvent.data) ;
};

