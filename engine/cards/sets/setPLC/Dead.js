"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dead extends Card {
  constructor(game) {
    super(game, "Dead", "Planar Chaos", "PLC");
  }
}

module.exports = Dead;
