"use strict";
module.exports = {
  PrimordialHydra: require("./PrimordialHydra"),
  SerraAvatar: require("./SerraAvatar"),
  VampireNocturnus: require("./VampireNocturnus")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPDP12 = module.exports;}