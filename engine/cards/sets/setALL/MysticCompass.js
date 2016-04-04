"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticCompass extends Card {
  constructor(game) {
    super(game, "Mystic Compass", "Alliances", "ALL");
  }
}

module.exports = MysticCompass;
