"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Remedy extends Card {
  constructor(game) {
    super(game, "Remedy", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Remedy;
