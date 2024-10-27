"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { google } from "googleapis";

export const createCalendarEvent = async ({
  clerkUserId,
  startTime,
  durationInMinutes,
  eventName,
  eventLocation,
}: {
  clerkUserId: string;
  startTime: Date;
  durationInMinutes: number;
  eventName: string;
  eventLocation: string;
}) => {
  const oAuthClient = await getOAuthClient(clerkUserId);

  const calendarEvent = await google.calendar("v3").events.insert({
    calendarId: "primary",
    auth: oAuthClient,
    requestBody: {
      summary: eventName, 
      location: eventLocation, 
      start: {
        dateTime: startTime.toISOString(), 
      },
      end: {
        dateTime: new Date(startTime.getTime() + durationInMinutes * 60000).toISOString(),
      },
    },
  });

  return calendarEvent.data;
};

const getOAuthClient = async (clerkUserId: string) => {
  const token = await clerkClient.users.getUserOauthAccessToken(clerkUserId, "oauth_google");
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
