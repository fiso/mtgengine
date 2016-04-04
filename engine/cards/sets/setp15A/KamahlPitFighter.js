"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamahlPitFighter extends Card {
  constructor(game) {
    super(game, "Kamahl, Pit Fighter", "15th Anniversary", "p15A");
  }
}

module.exports = KamahlPitFighter;
