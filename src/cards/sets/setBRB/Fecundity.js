"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fecundity extends UnimplementedCard {
  constructor (game) {
    super(game, "Fecundity", "Battle Royale Box Set", "BRB");
  }
}

module.exports = Fecundity;
