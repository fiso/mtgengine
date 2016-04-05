"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProdigalSorcerer extends UnimplementedCard {
  constructor(game) {
    super(game, "Prodigal Sorcerer", "Battle Royale Box Set", "BRB");
  }
}

module.exports = ProdigalSorcerer;
