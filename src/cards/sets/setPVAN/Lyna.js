"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lyna extends UnimplementedCard {
  constructor (game) {
    super(game, "Lyna", "Vanguard Series", "PVAN");
  }
}

module.exports = Lyna;
