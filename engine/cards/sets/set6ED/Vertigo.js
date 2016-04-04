"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vertigo extends Card {
  constructor(game) {
    super(game, "Vertigo", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Vertigo;
