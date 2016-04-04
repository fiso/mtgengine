"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GodoBanditWarlord extends Card {
  constructor(game) {
    super(game, "Godo, Bandit Warlord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GodoBanditWarlord;
