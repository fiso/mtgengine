"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WanderersTwig extends Card {
  constructor(game) {
    super(game, "Wanderer's Twig", "Lorwyn", "LRW");
  }
}

module.exports = WanderersTwig;
