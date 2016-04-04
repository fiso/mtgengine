"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientGrudge extends Card {
  constructor(game) {
    super(game, "Ancient Grudge", "Friday Night Magic", "pFNM");
  }
}

module.exports = AncientGrudge;
