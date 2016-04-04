"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderersTwig extends UnimplementedCard {
  constructor(game) {
    super(game, "Wanderer's Twig", "Lorwyn", "LRW");
  }
}

module.exports = WanderersTwig;
