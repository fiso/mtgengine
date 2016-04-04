"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlizzardSpecter extends Card {
  constructor(game) {
    super(game, "Blizzard Specter", "Coldsnap", "CSP");
  }
}

module.exports = BlizzardSpecter;
