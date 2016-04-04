"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuarantineField extends Card {
  constructor(game) {
    super(game, "Quarantine Field", "Battle for Zendikar", "BFZ");
  }
}

module.exports = QuarantineField;
