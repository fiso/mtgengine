"use strict";
module.exports = {
  FrostTitan: require("./FrostTitan"),
  GraveTitan: require("./GraveTitan"),
  InfernoTitan: require("./InfernoTitan")
};
if (window) {if (!window.mtgSets) { window.mtgSets = {}; } window.mtgSets.setPDP11 = module.exports;}