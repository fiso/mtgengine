"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaSerpent extends Card {
  constructor(game) {
    super(game, "Sea Serpent", "Collector's Edition", "CED");
  }
}

module.exports = SeaSerpent;
