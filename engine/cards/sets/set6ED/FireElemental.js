"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireElemental extends Card {
  constructor(game) {
    super(game, "Fire Elemental", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FireElemental;
