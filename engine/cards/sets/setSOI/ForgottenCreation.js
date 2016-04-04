"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForgottenCreation extends Card {
  constructor(game) {
    super(game, "Forgotten Creation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ForgottenCreation;
