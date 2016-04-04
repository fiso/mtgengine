"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DivinePresence extends Card {
  constructor(game) {
    super(game, "Divine Presence", "Invasion", "INV");
  }
}

module.exports = DivinePresence;
