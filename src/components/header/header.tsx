import { component$ } from "@builder.io/qwik";
import Logo from "./logo.svg";

export default component$(() => {
  return (
    <div class="fixed z-10 flex h-16 w-full items-center justify-center bg-primary text-white sm:h-24  ">
      <div class="container flex w-full flex-row items-center gap-4 px-2 md:px-4 lg:max-w-[1024px]">
        <img
          width={64}
          height={64}
          class="hidden h-[64px] w-[64px] sm:block"
          src={Logo}
          alt="Bath Cycling Club Logo"
        />
        <div class="text-4xl tracking-wide sm:text-5xl">BCC Rides</div>
      </div>
    </div>
  );
});
