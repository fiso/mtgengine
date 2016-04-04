"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornElemental extends Card {
  constructor(game) {
    super(game, "Thorn Elemental", "Eighth Edition", "8ED");
  }
}

module.exports = ThornElemental;
