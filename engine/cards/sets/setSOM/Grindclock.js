"use strict";
const Constants = require ("../../../Constants");
const GrindclockBase = require("../setM15/Grindclock");

class Grindclock extends GrindclockBase {
  constructor(game) {
    super(game, "Grindclock", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Grindclock;
