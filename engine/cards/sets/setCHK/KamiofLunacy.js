"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamiofLunacy extends Card {
  constructor(game) {
    super(game, "Kami of Lunacy", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamiofLunacy;
