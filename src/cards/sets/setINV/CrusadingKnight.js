"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrusadingKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Crusading Knight", "Invasion", "INV");
  }
}

module.exports = CrusadingKnight;
