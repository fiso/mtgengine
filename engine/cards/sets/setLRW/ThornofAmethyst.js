"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornofAmethyst extends Card {
  constructor(game) {
    super(game, "Thorn of Amethyst", "Lorwyn", "LRW");
  }
}

module.exports = ThornofAmethyst;
