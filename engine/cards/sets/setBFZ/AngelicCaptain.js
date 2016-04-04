"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelicCaptain extends Card {
  constructor(game) {
    super(game, "Angelic Captain", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AngelicCaptain;
