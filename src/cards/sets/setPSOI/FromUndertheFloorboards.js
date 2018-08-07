"use strict";
const Constants = require ("../../../Constants");
const FromUndertheFloorboardsBase = require("../setSOI/FromUndertheFloorboards");

class FromUndertheFloorboards extends FromUndertheFloorboardsBase {
  constructor (game) {
    super(game, "From Under the Floorboards", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = FromUndertheFloorboards;
