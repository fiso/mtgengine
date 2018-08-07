"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaMatrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Matrix", "Masters Edition IV", "ME4");
  }
}

module.exports = ManaMatrix;
