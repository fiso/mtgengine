"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoilElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Roil Elemental", "Zendikar", "ZEN");
  }
}

module.exports = RoilElemental;
