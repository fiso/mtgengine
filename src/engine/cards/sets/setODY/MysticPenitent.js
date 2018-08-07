"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticPenitent extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Penitent", "Odyssey", "ODY");
  }
}

module.exports = MysticPenitent;
