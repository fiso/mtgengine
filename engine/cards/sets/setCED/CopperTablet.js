"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CopperTablet extends Card {
  constructor(game) {
    super(game, "Copper Tablet", "Collector's Edition", "CED");
  }
}

module.exports = CopperTablet;
