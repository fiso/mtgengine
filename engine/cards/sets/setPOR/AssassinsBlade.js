"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssassinsBlade extends Card {
  constructor(game) {
    super(game, "Assassin's Blade", "Portal", "POR");
  }
}

module.exports = AssassinsBlade;
