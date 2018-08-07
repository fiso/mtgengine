"use strict";
const Constants = require ("../../../Constants");
const WatchwolfBase = require("../setA25/Watchwolf");

class Watchwolf extends WatchwolfBase {
  constructor (game) {
    super(game, "Watchwolf", "Friday Night Magic 2009", "F09");
  }
}

module.exports = Watchwolf;
