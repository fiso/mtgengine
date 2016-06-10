"use strict";
const Constants = require ("../../../Constants");
const BarbarianRingBase = require("../setODY/BarbarianRing");

class BarbarianRing extends BarbarianRingBase {
  constructor (game) {
    super(game, "Barbarian Ring", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = BarbarianRing;
