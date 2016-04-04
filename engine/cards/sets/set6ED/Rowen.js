"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rowen extends Card {
  constructor(game) {
    super(game, "Rowen", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Rowen;
