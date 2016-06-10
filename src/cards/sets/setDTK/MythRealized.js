"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MythRealized extends UnimplementedCard {
  constructor (game) {
    super(game, "Myth Realized", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MythRealized;
