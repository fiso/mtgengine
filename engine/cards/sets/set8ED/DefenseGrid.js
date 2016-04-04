"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefenseGrid extends Card {
  constructor(game) {
    super(game, "Defense Grid", "Eighth Edition", "8ED");
  }
}

module.exports = DefenseGrid;
