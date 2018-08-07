"use strict";
const Constants = require ("../../../Constants");
const VindicateBase = require("../setA25/Vindicate");

class Vindicate extends VindicateBase {
  constructor (game) {
    super(game, "Vindicate", "Eternal Masters", "EMA");
  }
}

module.exports = Vindicate;
