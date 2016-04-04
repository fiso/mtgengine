"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vitalize extends Card {
  constructor(game) {
    super(game, "Vitalize", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Vitalize;
