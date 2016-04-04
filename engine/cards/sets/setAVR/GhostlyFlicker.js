"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyFlicker extends Card {
  constructor(game) {
    super(game, "Ghostly Flicker", "Avacyn Restored", "AVR");
  }
}

module.exports = GhostlyFlicker;
