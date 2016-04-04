"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Piracy extends Card {
  constructor(game) {
    super(game, "Piracy", "Portal Second Age", "PO2");
  }
}

module.exports = Piracy;
