"use strict";
const Constants = require ("../../../Constants");
const HourofDevastationBase = require("../setHOU/HourofDevastation");

class HourofDevastation extends HourofDevastationBase {
  constructor (game) {
    super(game, "Hour of Devastation", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = HourofDevastation;
