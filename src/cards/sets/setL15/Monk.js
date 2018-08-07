"use strict";
const Constants = require ("../../../Constants");
const MonkBase = require("../setTFRF/Monk");

class Monk extends MonkBase {
  constructor (game) {
    super(game, "Monk", "League Tokens 2015", "L15");
  }
}

module.exports = Monk;
