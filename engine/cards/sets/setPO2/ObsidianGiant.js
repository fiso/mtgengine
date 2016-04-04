"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ObsidianGiant extends Card {
  constructor(game) {
    super(game, "Obsidian Giant", "Portal Second Age", "PO2");
  }
}

module.exports = ObsidianGiant;
