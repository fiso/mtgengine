"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rofellos extends UnimplementedCard {
  constructor (game) {
    super(game, "Rofellos", "Vanguard Series", "PVAN");
  }
}

module.exports = Rofellos;
