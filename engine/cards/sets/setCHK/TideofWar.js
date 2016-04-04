"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TideofWar extends Card {
  constructor(game) {
    super(game, "Tide of War", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TideofWar;
