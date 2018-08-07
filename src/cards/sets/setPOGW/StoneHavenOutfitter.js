"use strict";
const Constants = require ("../../../Constants");
const StoneHavenOutfitterBase = require("../setOGW/StoneHavenOutfitter");

class StoneHavenOutfitter extends StoneHavenOutfitterBase {
  constructor (game) {
    super(game, "Stone Haven Outfitter", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = StoneHavenOutfitter;
