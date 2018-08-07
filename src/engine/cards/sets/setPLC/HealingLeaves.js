"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealingLeaves extends UnimplementedCard {
  constructor (game) {
    super(game, "Healing Leaves", "Planar Chaos", "PLC");
  }
}

module.exports = HealingLeaves;
