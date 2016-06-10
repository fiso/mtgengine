"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticDenial extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Denial", "Portal", "POR");
  }
}

module.exports = MysticDenial;
