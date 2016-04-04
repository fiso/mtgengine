"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerrasLiturgy extends Card {
  constructor(game) {
    super(game, "Serra's Liturgy", "Urza's Saga", "USG");
  }
}

module.exports = SerrasLiturgy;
