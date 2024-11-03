import EventsCollection from "@/components/EventsCollection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const pageNumber = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const events = await getAllEvents({
    query: searchText,
    category: category,
    page: pageNumber,
    limit: 6,
  });
  return (
    <>
      <section className="bg-scenery bg-cover bg-center bg-no-repeat min-h-[50vh]  md:py-10">
        <div className="wrapper">
          <div className="flex flex-col gap-8">
            <h1 className="h1-bold text-white"> Discover</h1>
            <p className="p-regular-20 text-white md:p-regular-24">
              Join the fun, meet new people, and create unforgettable memories.
            </p>
          </div>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Top Events</h2>
        <div></div>
        <EventsCollection
          data={events?.data}
          emptyTitle="No events found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={pageNumber}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
