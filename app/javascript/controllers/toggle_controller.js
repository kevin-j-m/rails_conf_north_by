import { Controller } from "stimulus"

export default class extends Controller {
  // if using Typescript there's another declaration you can/have to do.
  // this.thingToHideTarget
  // this.thingToHideTargets
  // this.hasThingToHideTarget
  static targets = ["text", "thingToHide"]

  //Data Maps
  // get(key), has(key), set(key, stringValue), delete(key)

  // connect() {
  //   console.log("The Controller is Connected")
  // }

  isHidden() { return this.data.get("hidden") === "true" }

  flip() { this.data.set("hidden", this.isHidden() ? "false" : "true") }

  toggle() {
    this.flip()
    this.thingToHideTarget.classList.toggle("is-hidden")
    this.textTarget.innerText = this.isHidden() ? "Show" : "Hide"
  }
}
