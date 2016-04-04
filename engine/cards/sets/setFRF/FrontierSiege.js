"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrontierSiege extends Card {
  constructor(game) {
    super(game, "Frontier Siege", "Fate Reforged", "FRF");
  }
}

module.exports = FrontierSiege;
