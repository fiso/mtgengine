"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticVeil extends Card {
  constructor(game) {
    super(game, "Mystic Veil", "Visions", "VIS");
  }
}

module.exports = MysticVeil;
