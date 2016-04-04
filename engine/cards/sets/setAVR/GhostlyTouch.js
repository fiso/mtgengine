"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyTouch extends Card {
  constructor(game) {
    super(game, "Ghostly Touch", "Avacyn Restored", "AVR");
  }
}

module.exports = GhostlyTouch;
