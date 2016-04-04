"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HealingLeaves extends Card {
  constructor(game) {
    super(game, "Healing Leaves", "Planar Chaos", "PLC");
  }
}

module.exports = HealingLeaves;
