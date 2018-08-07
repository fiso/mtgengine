"use strict";
const Constants = require ("../../../Constants");
const SerumVisionsBase = require("../setMM3/SerumVisions");

class SerumVisions extends SerumVisionsBase {
  constructor (game) {
    super(game, "Serum Visions", "Friday Night Magic 2015", "F15");
  }
}

module.exports = SerumVisions;
