"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Refocus extends Card {
  constructor(game) {
    super(game, "Refocus", "Fate Reforged", "FRF");
  }
}

module.exports = Refocus;
