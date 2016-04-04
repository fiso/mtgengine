"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AjanisPresence extends Card {
  constructor(game) {
    super(game, "Ajani's Presence", "Journey into Nyx", "JOU");
  }
}

module.exports = AjanisPresence;
