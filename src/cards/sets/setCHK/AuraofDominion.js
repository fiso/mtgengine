"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuraofDominion extends UnimplementedCard {
  constructor (game) {
    super(game, "Aura of Dominion", "Champions of Kamigawa", "CHK");
  }
}

module.exports = AuraofDominion;
