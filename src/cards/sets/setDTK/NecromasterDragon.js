"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromasterDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Necromaster Dragon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = NecromasterDragon;
