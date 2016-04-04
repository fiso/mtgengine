"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Extract extends Card {
  constructor(game) {
    super(game, "Extract", "Odyssey", "ODY");
  }
}

module.exports = Extract;
