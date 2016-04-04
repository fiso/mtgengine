"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Attunement extends Card {
  constructor(game) {
    super(game, "Attunement", "Urza's Saga", "USG");
  }
}

module.exports = Attunement;
