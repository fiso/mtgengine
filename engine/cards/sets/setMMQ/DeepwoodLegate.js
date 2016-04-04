"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepwoodLegate extends Card {
  constructor(game) {
    super(game, "Deepwood Legate", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodLegate;
