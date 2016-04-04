"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasEmbrace extends Card {
  constructor(game) {
    super(game, "Gaea's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = GaeasEmbrace;
