"use strict";
const Constants = require ("../../../Constants");
const HourofGloryBase = require("../setHOU/HourofGlory");

class HourofGlory extends HourofGloryBase {
  constructor (game) {
    super(game, "Hour of Glory", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HourofGlory;
