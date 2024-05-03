/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resource, component$, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RideGroup } from "~/components/ride-group/ride-group";
import mockData from "~/mocks/rides.json";
import type { Group, Ride } from "~/types";
import { formatDate, getNextWeek, groupRides } from "~/utils";

export default component$(() => {
  const mockDelay = 500; // 1s
  // Fetch rides data from the server
  const ridesResource = useResource$<Group[]>(async () => {
    await new Promise((resolve) => setTimeout(resolve, mockDelay));

    return groupRides(mockData as Ride[]); // Cast JSON to Ride[]
  });

  const nextDate = getNextWeek();

  return (
    <Resource
      value={ridesResource}
      onPending={() => <>Loading...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(groupedRides) => (
        <div class="grid w-full grid-cols-1 gap-4 md:gap-8">
          {groupedRides.length > 0 ? (
            <>
              {groupedRides.map((group) => (
                <RideGroup
                  key={Object.keys(group)[0]}
                  group={group}
                  // user={user}
                />
              ))}
            </>
          ) : (
            <div class="flex h-full items-center p-8 pt-32 text-2xl">
              No planned rides before {formatDate(nextDate)}
            </div>
          )}
        </div>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Bath Cycling Club Rides",
  meta: [
    {
      name: "description",
      content: "View and join Bath Cycling Club rides",
    },
  ],
};
