"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FungusElemental extends Card {
  constructor(game) {
    super(game, "Fungus Elemental", "Weatherlight", "WTH");
  }
}

module.exports = FungusElemental;
