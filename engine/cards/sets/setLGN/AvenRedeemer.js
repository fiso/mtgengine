"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenRedeemer extends Card {
  constructor(game) {
    super(game, "Aven Redeemer", "Legions", "LGN");
  }
}

module.exports = AvenRedeemer;
