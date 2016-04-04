"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxSapphire extends Card {
  constructor(game) {
    super(game, "Mox Sapphire", "Collector's Edition", "CED");
  }
}

module.exports = MoxSapphire;
