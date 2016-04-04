"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamioftheHunt extends Card {
  constructor(game) {
    super(game, "Kami of the Hunt", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamioftheHunt;
