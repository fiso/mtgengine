"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PreeminentCaptain extends Card {
  constructor(game) {
    super(game, "Preeminent Captain", "Magic 2015 Core Set", "M15");
  }
}

module.exports = PreeminentCaptain;
