"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpulsiveDestruction extends UnimplementedCard {
  constructor (game) {
    super(game, "Impulsive Destruction", "Defeat a God", "TDAG");
  }
}

module.exports = ImpulsiveDestruction;
