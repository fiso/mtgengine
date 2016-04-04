"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimoireThief extends Card {
  constructor(game) {
    super(game, "Grimoire Thief", "Morningtide", "MOR");
  }
}

module.exports = GrimoireThief;
