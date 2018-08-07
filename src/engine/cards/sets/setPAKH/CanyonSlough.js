"use strict";
const Constants = require ("../../../Constants");
const CanyonSloughBase = require("../setAKH/CanyonSlough");

class CanyonSlough extends CanyonSloughBase {
  constructor (game) {
    super(game, "Canyon Slough", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CanyonSlough;
