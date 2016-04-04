"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RakdosCharm extends Card {
  constructor(game) {
    super(game, "Rakdos Charm", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosCharm;
