"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunDroplet extends Card {
  constructor(game) {
    super(game, "Sun Droplet", "Archenemy", "ARC");
  }
}

module.exports = SunDroplet;
