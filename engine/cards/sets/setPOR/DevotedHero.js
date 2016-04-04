"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevotedHero extends Card {
  constructor(game) {
    super(game, "Devoted Hero", "Portal", "POR");
  }
}

module.exports = DevotedHero;
