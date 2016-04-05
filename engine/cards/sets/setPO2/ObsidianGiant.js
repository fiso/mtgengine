"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObsidianGiant extends UnimplementedCard {
  constructor(game) {
    super(game, "Obsidian Giant", "Portal Second Age", "PO2");
  }
}

module.exports = ObsidianGiant;
