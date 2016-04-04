"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Relearn extends Card {
  constructor(game) {
    super(game, "Relearn", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Relearn;
