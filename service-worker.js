self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Do any additional processing on the response if needed
        return response;
      })
      .catch((error) => {
        console.error("Error fetching:", error);
        // Optionally, you can return a custom response for failed fetch requests
        return new Response("An error occurred while fetching.", {
          status: 500,
        });
      })
  );
});
