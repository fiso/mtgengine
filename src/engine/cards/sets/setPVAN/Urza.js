"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Urza extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza", "Vanguard Series", "PVAN");
  }
}

module.exports = Urza;
