"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodstoneCameo extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodstone Cameo", "Invasion", "INV");
  }
}

module.exports = BloodstoneCameo;
