"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatedConflagration extends Card {
  constructor(game) {
    super(game, "Fated Conflagration", "Born of the Gods", "BNG");
  }
}

module.exports = FatedConflagration;
