"use strict";
const Constants = require ("../../../Constants");
const WoodlandWandererBase = require("../setBFZ/WoodlandWanderer");

class WoodlandWanderer extends WoodlandWandererBase {
  constructor (game) {
    super(game, "Woodland Wanderer", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = WoodlandWanderer;
