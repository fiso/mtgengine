"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Krosan Archer", "Odyssey", "ODY");
  }
}

module.exports = KrosanArcher;
