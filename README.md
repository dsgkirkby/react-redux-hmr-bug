# React-Redux 5 and HMR Bug

This repro details a bug in React-Redux versions 5.0.0 and up.

With RR5, when `components/main` is edited and hot reloaded, connected components in the application stop updating.
With RR4, the app hot reloads correctly.
