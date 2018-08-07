"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Orim extends UnimplementedCard {
  constructor (game) {
    super(game, "Orim", "Vanguard Series", "PVAN");
  }
}

module.exports = Orim;
