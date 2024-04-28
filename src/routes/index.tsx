import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>New site</h1>
      <div>Some work todo...</div>
    </>
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
