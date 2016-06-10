"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SenselessRage extends UnimplementedCard {
  constructor (game) {
    super(game, "Senseless Rage", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SenselessRage;
