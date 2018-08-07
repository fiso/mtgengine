"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaddenedOread extends UnimplementedCard {
  constructor (game) {
    super(game, "Maddened Oread", "Defeat a God", "TDAG");
  }
}

module.exports = MaddenedOread;
