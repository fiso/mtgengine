"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsidianGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Obsidian Giant", "Portal Second Age", "P02");
  }
}

module.exports = ObsidianGiant;
