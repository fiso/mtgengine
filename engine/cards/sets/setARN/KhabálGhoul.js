"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KhabálGhoul extends Card {
  constructor(game) {
    super(game, "Khabál Ghoul", "Arabian Nights", "ARN");
  }
}

module.exports = KhabálGhoul;
