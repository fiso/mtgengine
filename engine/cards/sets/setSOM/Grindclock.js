"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrindclockBase = require("../setM15/Grindclock.js");

class Grindclock extends GrindclockBase {
  constructor(game) {
    super(game, "Grindclock", "Scars of Mirrodin", "SOM");
  }
}

module.exports = Grindclock;
