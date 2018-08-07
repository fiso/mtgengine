"use strict";
const Constants = require ("../../../Constants");
const GrindDustBase = require("../setHOU/GrindDust");

class GrindDust extends GrindDustBase {
  constructor (game) {
    super(game, "Grind // Dust", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = GrindDust;
