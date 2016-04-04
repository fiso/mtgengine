"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatedRetribution extends Card {
  constructor(game) {
    super(game, "Fated Retribution", "Born of the Gods", "BNG");
  }
}

module.exports = FatedRetribution;
