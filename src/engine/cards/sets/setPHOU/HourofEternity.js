"use strict";
const Constants = require ("../../../Constants");
const HourofEternityBase = require("../setHOU/HourofEternity");

class HourofEternity extends HourofEternityBase {
  constructor (game) {
    super(game, "Hour of Eternity", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HourofEternity;
