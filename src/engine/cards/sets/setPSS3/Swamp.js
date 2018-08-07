"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setC18/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "M19 Standard Showdown", "PSS3");
  }
}

module.exports = Swamp;
