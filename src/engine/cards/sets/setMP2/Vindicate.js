"use strict";
const Constants = require ("../../../Constants");
const VindicateBase = require("../setA25/Vindicate");

class Vindicate extends VindicateBase {
  constructor (game) {
    super(game, "Vindicate", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Vindicate;
