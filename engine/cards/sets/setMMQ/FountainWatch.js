"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FountainWatch extends Card {
  constructor(game) {
    super(game, "Fountain Watch", "Mercadian Masques", "MMQ");
  }
}

module.exports = FountainWatch;
