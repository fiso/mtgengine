"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoxPearl extends Card {
  constructor(game) {
    super(game, "Mox Pearl", "Collector's Edition", "CED");
  }
}

module.exports = MoxPearl;
