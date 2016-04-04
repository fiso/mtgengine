"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarbarianRingBase = require("../setODY/BarbarianRing.js");

class BarbarianRing extends BarbarianRingBase {
  constructor(game) {
    super(game, "Barbarian Ring", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = BarbarianRing;
