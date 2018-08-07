"use strict";
const Constants = require ("../../../Constants");
const BarbarianRingBase = require("../setPD2/BarbarianRing");

class BarbarianRing extends BarbarianRingBase {
  constructor (game) {
    super(game, "Barbarian Ring", "Odyssey", "ODY");
  }
}

module.exports = BarbarianRing;
