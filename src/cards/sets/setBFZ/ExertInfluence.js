"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExertInfluence extends UnimplementedCard {
  constructor (game) {
    super(game, "Exert Influence", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ExertInfluence;
