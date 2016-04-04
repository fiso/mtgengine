"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TropicalIsland extends Card {
  constructor(game) {
    super(game, "Tropical Island", "Collector's Edition", "CED");
  }
}

module.exports = TropicalIsland;
