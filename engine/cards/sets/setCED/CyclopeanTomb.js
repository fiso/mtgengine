"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CyclopeanTomb extends Card {
  constructor(game) {
    super(game, "Cyclopean Tomb", "Collector's Edition", "CED");
  }
}

module.exports = CyclopeanTomb;
