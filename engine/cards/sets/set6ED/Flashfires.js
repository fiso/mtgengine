"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Flashfires extends Card {
  constructor(game) {
    super(game, "Flashfires", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flashfires;
