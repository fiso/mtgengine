"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squee extends UnimplementedCard {
  constructor (game) {
    super(game, "Squee", "Vanguard Series", "PVAN");
  }
}

module.exports = Squee;
