"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricEmbrace extends Card {
  constructor(game) {
    super(game, "Vampiric Embrace", "Urza's Saga", "USG");
  }
}

module.exports = VampiricEmbrace;
