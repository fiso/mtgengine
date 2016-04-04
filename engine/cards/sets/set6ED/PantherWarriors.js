"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PantherWarriors extends Card {
  constructor(game) {
    super(game, "Panther Warriors", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PantherWarriors;
