"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoulPresence extends Card {
  constructor(game) {
    super(game, "Foul Presence", "Apocalypse", "APC");
  }
}

module.exports = FoulPresence;
