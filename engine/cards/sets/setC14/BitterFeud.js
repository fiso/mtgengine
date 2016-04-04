"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BitterFeud extends Card {
  constructor(game) {
    super(game, "Bitter Feud", "Commander 2014", "C14");
  }
}

module.exports = BitterFeud;
