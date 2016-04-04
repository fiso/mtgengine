"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObsidianAcolyte extends Card {
  constructor(game) {
    super(game, "Obsidian Acolyte", "Invasion", "INV");
  }
}

module.exports = ObsidianAcolyte;
