"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PretendersClaim extends Card {
  constructor(game) {
    super(game, "Pretender's Claim", "Mercadian Masques", "MMQ");
  }
}

module.exports = PretendersClaim;
