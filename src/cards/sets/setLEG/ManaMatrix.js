"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Matrix", "Legends", "LEG");
  }
}

module.exports = ManaMatrix;
