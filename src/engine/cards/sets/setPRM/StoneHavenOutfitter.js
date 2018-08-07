"use strict";
const Constants = require ("../../../Constants");
const StoneHavenOutfitterBase = require("../setOGW/StoneHavenOutfitter");

class StoneHavenOutfitter extends StoneHavenOutfitterBase {
  constructor (game) {
    super(game, "Stone Haven Outfitter", "Magic Online Promos", "PRM");
  }
}

module.exports = StoneHavenOutfitter;
