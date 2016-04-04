"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlenElendra extends Card {
  constructor(game) {
    super(game, "Glen Elendra", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GlenElendra;
