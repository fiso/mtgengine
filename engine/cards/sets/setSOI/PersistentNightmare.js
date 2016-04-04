"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PersistentNightmare extends Card {
  constructor(game) {
    super(game, "Persistent Nightmare", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PersistentNightmare;
