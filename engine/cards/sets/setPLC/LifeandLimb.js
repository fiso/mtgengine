"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifeandLimb extends Card {
  constructor(game) {
    super(game, "Life and Limb", "Planar Chaos", "PLC");
  }
}

module.exports = LifeandLimb;
