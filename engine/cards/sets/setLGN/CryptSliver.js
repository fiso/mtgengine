"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Crypt Sliver", "Legions", "LGN");
  }
}

module.exports = CryptSliver;
