"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CovertOperative extends Card {
  constructor(game) {
    super(game, "Covert Operative", "Legions", "LGN");
  }
}

module.exports = CovertOperative;
