"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WinterOrb extends Card {
  constructor(game) {
    super(game, "Winter Orb", "Collector's Edition", "CED");
  }
}

module.exports = WinterOrb;
