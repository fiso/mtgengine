"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MineBearer extends UnimplementedCard {
  constructor(game) {
    super(game, "Mine Bearer", "Prophecy", "PCY");
  }
}

module.exports = MineBearer;
