"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SageofAncientLore extends Card {
  constructor(game) {
    super(game, "Sage of Ancient Lore", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SageofAncientLore;
