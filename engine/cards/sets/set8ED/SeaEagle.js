"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeaEagle extends Card {
  constructor(game) {
    super(game, "Sea Eagle", "Eighth Edition", "8ED");
  }
}

module.exports = SeaEagle;
