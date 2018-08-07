"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Serra extends UnimplementedCard {
  constructor (game) {
    super(game, "Serra", "Vanguard Series", "PVAN");
  }
}

module.exports = Serra;
