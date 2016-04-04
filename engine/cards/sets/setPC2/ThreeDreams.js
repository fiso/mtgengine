"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThreeDreams extends Card {
  constructor(game) {
    super(game, "Three Dreams", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ThreeDreams;
