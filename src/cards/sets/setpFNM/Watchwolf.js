"use strict";
const Constants = require ("../../../Constants");
const WatchwolfBase = require("../setARC/Watchwolf");

class Watchwolf extends WatchwolfBase {
  constructor (game) {
    super(game, "Watchwolf", "Friday Night Magic", "pFNM");
  }
}

module.exports = Watchwolf;
