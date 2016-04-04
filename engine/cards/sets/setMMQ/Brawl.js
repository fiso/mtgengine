"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brawl extends Card {
  constructor(game) {
    super(game, "Brawl", "Mercadian Masques", "MMQ");
  }
}

module.exports = Brawl;
