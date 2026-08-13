import React from "react";
import { hydrateRoot } from "react-dom/client";
import {islands} from "./islands";

// Find every marked island container in the server HTML
const nodes = document.querySelectorAll("[data-hydrate]")

nodes.forEach(node => {
  const name = node.getAttribute("data-hydrate")
  const Component = islands[name]

  if(!Component) {
    console.warn(`No island registered for "${name}"`)
    return
  }

  const raw = node.getAttribute("data-props")
  const props = raw ? JSON.parse(raw) : {}

  hydrateRoot(node, <Component {...props} />)
})