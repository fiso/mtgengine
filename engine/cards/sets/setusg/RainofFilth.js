"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofFilth extends Card {
  constructor(game) {
    super(game, "Rain of Filth", "Urza's Saga", "USG");
  }
}

module.exports = RainofFilth;
