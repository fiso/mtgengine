"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromokaCaptain extends Card {
  constructor(game) {
    super(game, "Dromoka Captain", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokaCaptain;
