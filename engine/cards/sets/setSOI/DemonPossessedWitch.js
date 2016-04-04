"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonPossessedWitch extends Card {
  constructor(game) {
    super(game, "Demon-Possessed Witch", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DemonPossessedWitch;
