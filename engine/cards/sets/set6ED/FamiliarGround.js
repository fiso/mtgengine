"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FamiliarGround extends Card {
  constructor(game) {
    super(game, "Familiar Ground", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FamiliarGround;
