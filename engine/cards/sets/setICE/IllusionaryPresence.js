"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IllusionaryPresence extends Card {
  constructor(game) {
    super(game, "Illusionary Presence", "Ice Age", "ICE");
  }
}

module.exports = IllusionaryPresence;
