"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThicketElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Thicket Elemental", "Invasion", "INV");
  }
}

module.exports = ThicketElemental;
