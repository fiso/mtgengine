"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Werebear extends Card {
  constructor(game) {
    super(game, "Werebear", "Odyssey", "ODY");
  }
}

module.exports = Werebear;
