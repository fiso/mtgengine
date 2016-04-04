"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Perish extends Card {
  constructor(game) {
    super(game, "Perish", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Perish;
