"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CatharsCompanion extends Card {
  constructor(game) {
    super(game, "Cathar's Companion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CatharsCompanion;
