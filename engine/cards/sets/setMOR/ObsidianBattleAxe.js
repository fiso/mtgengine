"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsidianBattleAxe extends UnimplementedCard {
  constructor(game) {
    super(game, "Obsidian Battle-Axe", "Morningtide", "MOR");
  }
}

module.exports = ObsidianBattleAxe;
