"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObsidianBattleAxe extends Card {
  constructor(game) {
    super(game, "Obsidian Battle-Axe", "Morningtide", "MOR");
  }
}

module.exports = ObsidianBattleAxe;
