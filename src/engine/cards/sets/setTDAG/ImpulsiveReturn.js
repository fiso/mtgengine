"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpulsiveReturn extends UnimplementedCard {
  constructor (game) {
    super(game, "Impulsive Return", "Defeat a God", "TDAG");
  }
}

module.exports = ImpulsiveReturn;
