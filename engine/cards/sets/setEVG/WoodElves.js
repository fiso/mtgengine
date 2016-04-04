"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoodElvesBase = require("../setC14/WoodElves.js");

class WoodElves extends WoodElvesBase {
  constructor(game) {
    super(game, "Wood Elves", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = WoodElves;
