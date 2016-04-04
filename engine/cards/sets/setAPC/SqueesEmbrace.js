"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SqueesEmbrace extends Card {
  constructor(game) {
    super(game, "Squee's Embrace", "Apocalypse", "APC");
  }
}

module.exports = SqueesEmbrace;
