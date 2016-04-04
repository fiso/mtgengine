"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZephidsEmbrace extends Card {
  constructor(game) {
    super(game, "Zephid's Embrace", "Urza's Saga", "USG");
  }
}

module.exports = ZephidsEmbrace;
