"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredGround extends Card {
  constructor(game) {
    super(game, "Sacred Ground", "Eighth Edition", "8ED");
  }
}

module.exports = SacredGround;
