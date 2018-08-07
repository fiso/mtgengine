"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkromasDevoted extends UnimplementedCard {
  constructor (game) {
    super(game, "Akroma's Devoted", "Legions", "LGN");
  }
}

module.exports = AkromasDevoted;
