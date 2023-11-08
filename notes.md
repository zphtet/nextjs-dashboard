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
