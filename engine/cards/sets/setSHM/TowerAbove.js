"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerAbove extends UnimplementedCard {
  constructor(game) {
    super(game, "Tower Above", "Shadowmoor", "SHM");
  }
}

module.exports = TowerAbove;
