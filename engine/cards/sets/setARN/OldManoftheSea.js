"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OldManoftheSea extends Card {
  constructor(game) {
    super(game, "Old Man of the Sea", "Arabian Nights", "ARN");
  }
}

module.exports = OldManoftheSea;
