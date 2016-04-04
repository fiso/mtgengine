"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeroofGomaFada extends Card {
  constructor(game) {
    super(game, "Hero of Goma Fada", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HeroofGomaFada;
