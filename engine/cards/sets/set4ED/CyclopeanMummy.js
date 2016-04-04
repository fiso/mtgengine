"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CyclopeanMummy extends Card {
  constructor(game) {
    super(game, "Cyclopean Mummy", "Fourth Edition", "4ED");
  }
}

module.exports = CyclopeanMummy;
