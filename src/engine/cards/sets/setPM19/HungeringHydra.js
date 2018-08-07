"use strict";
const Constants = require ("../../../Constants");
const HungeringHydraBase = require("../setM19/HungeringHydra");

class HungeringHydra extends HungeringHydraBase {
  constructor (game) {
    super(game, "Hungering Hydra", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = HungeringHydra;
