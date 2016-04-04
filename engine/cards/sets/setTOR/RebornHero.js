"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RebornHero extends Card {
  constructor(game) {
    super(game, "Reborn Hero", "Torment", "TOR");
  }
}

module.exports = RebornHero;
