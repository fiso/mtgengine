"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Karn extends UnimplementedCard {
  constructor (game) {
    super(game, "Karn", "Vanguard Series", "PVAN");
  }
}

module.exports = Karn;
