"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakshasasSecret extends Card {
  constructor(game) {
    super(game, "Rakshasa's Secret", "Khans of Tarkir", "KTK");
  }
}

module.exports = RakshasasSecret;
