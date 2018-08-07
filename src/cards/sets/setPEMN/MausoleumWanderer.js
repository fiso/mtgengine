"use strict";
const Constants = require ("../../../Constants");
const MausoleumWandererBase = require("../setEMN/MausoleumWanderer");

class MausoleumWanderer extends MausoleumWandererBase {
  constructor (game) {
    super(game, "Mausoleum Wanderer", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = MausoleumWanderer;
