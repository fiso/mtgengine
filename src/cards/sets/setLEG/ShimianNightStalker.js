"use strict";
const Constants = require ("../../../Constants");
const ShimianNightStalkerBase = require("../setCHR/ShimianNightStalker");

class ShimianNightStalker extends ShimianNightStalkerBase {
  constructor (game) {
    super(game, "Shimian Night Stalker", "Legends", "LEG");
  }
}

module.exports = ShimianNightStalker;
