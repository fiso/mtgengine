"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SternJudge extends Card {
  constructor(game) {
    super(game, "Stern Judge", "Torment", "TOR");
  }
}

module.exports = SternJudge;
