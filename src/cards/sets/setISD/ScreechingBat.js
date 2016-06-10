"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingBat extends UnimplementedCard {
  constructor (game) {
    super(game, "Screeching Bat", "Innistrad", "ISD");
  }
}

module.exports = ScreechingBat;
