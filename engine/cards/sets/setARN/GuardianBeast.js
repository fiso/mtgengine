"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianBeast extends Card {
  constructor(game) {
    super(game, "Guardian Beast", "Arabian Nights", "ARN");
  }
}

module.exports = GuardianBeast;
