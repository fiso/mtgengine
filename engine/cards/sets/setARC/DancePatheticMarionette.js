"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DancePatheticMarionette extends Card {
  constructor(game) {
    super(game, "Dance, Pathetic Marionette", "Archenemy", "ARC");
  }
}

module.exports = DancePatheticMarionette;
