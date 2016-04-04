"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Prosperity extends Card {
  constructor(game) {
    super(game, "Prosperity", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Prosperity;
