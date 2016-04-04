"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fear extends Card {
  constructor(game) {
    super(game, "Fear", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fear;
