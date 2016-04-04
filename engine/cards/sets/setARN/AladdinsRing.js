"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AladdinsRing extends Card {
  constructor(game) {
    super(game, "Aladdin's Ring", "Arabian Nights", "ARN");
  }
}

module.exports = AladdinsRing;
