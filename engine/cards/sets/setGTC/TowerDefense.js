"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerDefense extends UnimplementedCard {
  constructor(game) {
    super(game, "Tower Defense", "Gatecrash", "GTC");
  }
}

module.exports = TowerDefense;
