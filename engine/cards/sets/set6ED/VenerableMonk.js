"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenerableMonk extends Card {
  constructor(game) {
    super(game, "Venerable Monk", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VenerableMonk;
