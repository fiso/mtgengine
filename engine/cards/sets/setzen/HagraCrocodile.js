"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HagraCrocodile extends Card {
  constructor(game) {
    super(game, "Hagra Crocodile", "Zendikar", "ZEN");
  }
}

module.exports = HagraCrocodile;
