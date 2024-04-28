import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="fixed z-10 -mt-16 flex h-16 w-full items-center justify-center bg-primary text-white sm:-mt-24 sm:h-24 lg:-mt-32  ">
      <div class="container flex w-full flex-row justify-between px-2 md:px-4 lg:max-w-[1024px]">
        <div class="text-4xl tracking-wide sm:text-5xl">BCC Rides</div>
      </div>
    </div>
  );
});
