## Font Optimize

fetch custom font at build time and host with your other assets
so there no extra request for font

> (reduce layout shit due to font)

## Image Optimization

- width and height
  (aspect ratio identical to the source image.)

## Partial Rendering

- render layout
  for example : page change based on the route segment. But Layout not changed and not re-render .
  that is called partial Rendering.

## Automatic Code Splitting and Prefetching

- automatically code split
- pages are isolated (so when a page throws error , the rest of the app will remain)
- Next js prefetch in the background resources for seen link routes
  (page transitions near instant 🔥)

## SKip Api Layer

- by using react server component

Next js prerender routes to improve performance , called Static Rendering .So if your data changes in database, it won't be reflected in your app.

## What are request waterfalls?

A "waterfall" refers to a sequence of network requests that depend on the completion of previous requests. In the case of data fetching, each request can only begin once the previous request has returned data.

- sequential and parallel fetching
- request start once the previous request has returned data
- fetch paralle using promise.all or promis.allSettled

## What is Static Rendering?

With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation. The result can then be distributed and cached (stored) in a Content Delivery Network (CDN).

- Faster Websites - Prerendered content can be cached. This ensures that users around the world can access your website's content more quickly and reliably.
- Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.
- SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

## What is Dynamic Rendering?

With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

- Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
- User-Specific Content - It's easier to serve user-specific content, such as personalized dashboards or user profiles, through dynamic rendering, as the data is updated based on user interaction.
- Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

to opt out static Rendering

> export const dynamic = "force-dynamic"

> With dynamic rendering, your application is only as fast as your slowest data fetch.

## What is streaming?

Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.

## Best practice: Debouncing

Debouncing is a programming practice that limits the rate at which a function can fire.
