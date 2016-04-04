"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Inferno extends Card {
  constructor(game) {
    super(game, "Inferno", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Inferno;
