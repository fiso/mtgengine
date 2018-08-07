"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticFamiliar extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Familiar", "Torment", "TOR");
  }
}

module.exports = MysticFamiliar;
