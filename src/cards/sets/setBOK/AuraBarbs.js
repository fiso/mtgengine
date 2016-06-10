"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraBarbs extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura Barbs", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AuraBarbs;
