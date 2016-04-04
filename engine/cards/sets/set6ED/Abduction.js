"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Abduction extends Card {
  constructor(game) {
    super(game, "Abduction", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Abduction;
