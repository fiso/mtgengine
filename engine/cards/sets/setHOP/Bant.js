"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bant extends Card {
  constructor(game) {
    super(game, "Bant", "Planechase", "HOP");
  }
}

module.exports = Bant;
