"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Earthquake extends Card {
  constructor(game) {
    super(game, "Earthquake", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Earthquake;
