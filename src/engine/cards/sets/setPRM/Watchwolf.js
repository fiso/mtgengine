"use strict";
const Constants = require ("../../../Constants");
const WatchwolfBase = require("../setA25/Watchwolf");

class Watchwolf extends WatchwolfBase {
  constructor (game) {
    super(game, "Watchwolf", "Magic Online Promos", "PRM");
  }
}

module.exports = Watchwolf;
