"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertedTemple extends UnimplementedCard {
  constructor (game) {
    super(game, "Deserted Temple", "Odyssey", "ODY");
  }
}

module.exports = DesertedTemple;
