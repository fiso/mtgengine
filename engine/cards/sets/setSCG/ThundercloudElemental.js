"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThundercloudElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Thundercloud Elemental", "Scourge", "SCG");
  }
}

module.exports = ThundercloudElemental;
