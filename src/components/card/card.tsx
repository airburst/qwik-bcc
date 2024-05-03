import { component$, event$, useSignal } from "@builder.io/qwik";
import clsx from "clsx";
import type { Ride, User } from "~/types";
import { isReady } from "~/utils/rides";
import BikeImage from "/public/images/biking-neutral-500-64.png?jsx";

type Props = {
  ride: Ride;
  user?: User;
};

export const Card = component$(({ ride, user }: Props) => {
  const swipingStore = useSignal<boolean>(false);
  const { id, name, time, group, destination, distance, limit, users } = ride; // FIXME: add date once types are corrected
  const isNotReady = !isReady(ride);

  const details = destination
    ? `${destination} - ${distance || ""}`
    : `${distance || ""}`;

  const targetUrl = `/ride/${id}/`; // FIXME: add date
  // const targetUrl = `/ride/${id}/${date.split("T")[0]}`;
  const onPress = event$(() => {
    console.log("onPress", targetUrl);
    // router.push(targetUrl);  // FIXME:
  });

  if (!id) {
    return null;
  }

  const isGoing = user ? users?.map((u) => u.id).includes(user.id) : false;
  const riderCount = users?.length;
  const hasLimit = limit && limit > -1;
  const ridersLabel = hasLimit ? `${riderCount}/${limit}` : riderCount;

  const cardClass = clsx(
    "grid w-full grid-cols-[auto_1fr_80px] pl-1 pb-1 border-l-4",
    isNotReady ? "border-red-500 rounded-l" : "border-transparent",
  );

  // If a rider is going, span the title across 2 columns to make space
  // else span the entire row (of 3 columns)
  const titleClass = clsx(
    "truncate p-1 font-bold uppercase tracking-wide",
    isGoing ? "col-span-2" : "col-span-3",
  );

  return (
    <div
      role="presentation"
      class="md:mx-autotext-neutral-500 relative box-border flex w-full cursor-pointer gap-2 rounded bg-white shadow-md hover:text-neutral-700 hover:shadow-lg md:gap-2"
      onMouseDown$={() => (swipingStore.value = false)}
      onMouseMove$={() => (swipingStore.value = true)}
      onMouseUp$={(e) => {
        if (!swipingStore.value && e.button === 0) {
          onPress();
        }
        swipingStore.value = false;
      }}
      onTouchStart$={() => (swipingStore.value = false)}
      onTouchMove$={() => (swipingStore.value = true)}
      onTouchEnd$={(e) => {
        if (e.cancelable) e.preventDefault();
        if (!swipingStore.value) {
          onPress();
        }
        swipingStore.value = false;
      }}
    >
      <div class={cardClass}>
        <div class={titleClass}>
          {name}
          {group ? `: ${group}` : ""}{" "}
        </div>
        {isGoing && (
          <div class="rounded-tr-md bg-green-700 p-1 px-2 font-bold tracking-wide text-white">
            GOING
          </div>
        )}
        <div class="p-1 font-bold tracking-wide text-neutral-600">{time}</div>
        <div class="truncate p-1">{details}</div>
        {/* Rider count icon */}

        <div class="flex flex-row items-center justify-end gap-2 pr-2">
          <BikeImage alt="Number of riders" style={{ width: "16px" }} />
          <span class="text-xl font-bold">{ridersLabel}</span>
        </div>
      </div>

      {/* <Cancelled cancelled={ride.cancelled || false} position="bottom" /> */}
    </div>
  );
});
