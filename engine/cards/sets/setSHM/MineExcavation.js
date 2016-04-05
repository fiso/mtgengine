"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MineExcavation extends UnimplementedCard {
  constructor(game) {
    super(game, "Mine Excavation", "Shadowmoor", "SHM");
  }
}

module.exports = MineExcavation;
