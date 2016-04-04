"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KamioftheWaningMoon extends Card {
  constructor(game) {
    super(game, "Kami of the Waning Moon", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KamioftheWaningMoon;
