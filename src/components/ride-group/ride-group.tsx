import { component$ } from "@builder.io/qwik";
import type { Group, User } from "~/types";
import { ungroupRides } from "~/utils";
import { Card } from "../card/card";

type Props = {
  group: Group;
  user?: User;
};

export const RideGroup = component$(({ group, user }: Props) => {
  const rideData = ungroupRides(group);
  const rideDate = rideData.map(({ date }) => date)[0];
  const types = rideData.map(({ rides }) => ({ rides }));

  return (
    <div class="flex w-full flex-col items-start gap-2">
      <div class="flex w-full justify-center bg-primary p-2 font-bold uppercase tracking-widest text-white sm:rounded">
        <div>{rideDate}</div>
      </div>

      {types.map(({ rides }) =>
        rides.map((ride) => (
          <div
            id={ride.id}
            key={ride.id}
            class="w-full scroll-mt-16 px-2 md:scroll-mt-24 md:px-0"
          >
            <Card ride={ride} user={user} />
          </div>
        )),
      )}
    </div>
  );
});
