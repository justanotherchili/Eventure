import EventsCollection from "@/components/EventsCollection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link";

export default async function Home({searchParams}:SearchParamProps) {
  const pageNumber = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || ""
  const category = (searchParams?.category as string) || ""
  const events = await getAllEvents({
    query: searchText,
    category: category,
    page: pageNumber,
    limit: 6
  })
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              {" "}
              Share, Manage or Sign up to events here
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Join hundreds of fun events or host your own
            </p>
            <Button asChild size="lg" className="button w-full sm:w-fit">
              <Link href="#events">Explore</Link>
            </Button>
          </div>
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Events</h2>
        <div>
  
        </div>
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
