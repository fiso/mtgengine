"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Volrath extends UnimplementedCard {
  constructor (game) {
    super(game, "Volrath", "Vanguard Series", "PVAN");
  }
}

module.exports = Volrath;
