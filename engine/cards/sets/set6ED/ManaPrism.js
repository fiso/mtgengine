"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaPrism extends Card {
  constructor(game) {
    super(game, "Mana Prism", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ManaPrism;
