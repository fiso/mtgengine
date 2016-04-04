"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Soothsaying extends Card {
  constructor(game) {
    super(game, "Soothsaying", "Mercadian Masques", "MMQ");
  }
}

module.exports = Soothsaying;
