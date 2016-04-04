"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dichotomancy extends Card {
  constructor(game) {
    super(game, "Dichotomancy", "Planar Chaos", "PLC");
  }
}

module.exports = Dichotomancy;
