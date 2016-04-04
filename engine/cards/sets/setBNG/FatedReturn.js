"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatedReturn extends Card {
  constructor(game) {
    super(game, "Fated Return", "Born of the Gods", "BNG");
  }
}

module.exports = FatedReturn;
