"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsidianAcolyte extends UnimplementedCard {
  constructor(game) {
    super(game, "Obsidian Acolyte", "Invasion", "INV");
  }
}

module.exports = ObsidianAcolyte;
