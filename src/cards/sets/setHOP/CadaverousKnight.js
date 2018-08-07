"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CadaverousKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Cadaverous Knight", "Planechase", "HOP");
  }
}

module.exports = CadaverousKnight;
