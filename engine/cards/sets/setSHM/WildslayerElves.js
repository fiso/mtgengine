"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildslayerElves extends Card {
  constructor(game) {
    super(game, "Wildslayer Elves", "Shadowmoor", "SHM");
  }
}

module.exports = WildslayerElves;
