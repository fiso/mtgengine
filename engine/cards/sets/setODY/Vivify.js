"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vivify extends Card {
  constructor(game) {
    super(game, "Vivify", "Odyssey", "ODY");
  }
}

module.exports = Vivify;
