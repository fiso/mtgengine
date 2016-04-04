"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForgottenAncient extends Card {
  constructor(game) {
    super(game, "Forgotten Ancient", "Archenemy", "ARC");
  }
}

module.exports = ForgottenAncient;
