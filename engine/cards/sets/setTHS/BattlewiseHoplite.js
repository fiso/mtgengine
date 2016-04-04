"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlewiseHoplite extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlewise Hoplite", "Theros", "THS");
  }
}

module.exports = BattlewiseHoplite;
