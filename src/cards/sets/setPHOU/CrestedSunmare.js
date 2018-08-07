"use strict";
const Constants = require ("../../../Constants");
const CrestedSunmareBase = require("../setHOU/CrestedSunmare");

class CrestedSunmare extends CrestedSunmareBase {
  constructor (game) {
    super(game, "Crested Sunmare", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = CrestedSunmare;
