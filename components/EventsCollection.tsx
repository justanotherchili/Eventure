import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import EventsCard from './EventCard'
import Pagination from './Pagination'

type EventsCollectionProps = {
  data: IEvent[],
  emptyTitle: string,
  emptyStateSubtext: string,
  limit: number,
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
}
const EventsCollection = ({data, emptyTitle, emptyStateSubtext, page, totalPages = 0, collectionType, urlParamName}: EventsCollectionProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hasTicket = collectionType === 'My_Tickets';

              return (
                <li key={event._id} className="flex justify-center">
                  <EventsCard event={event} hasOrderLink={hasOrderLink} hasTicket={hasTicket} />
                </li>
              )
            })}
          </ul>
          {totalPages > 1 && (
            <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages}/>
          )}
        </div>
      ) : (<div>
        <h3>{emptyTitle}</h3>
        <p>{emptyStateSubtext}</p>
      </div>)}
    </>
  )
}

export default EventsCollection