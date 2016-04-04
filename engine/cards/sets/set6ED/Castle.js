"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Castle extends Card {
  constructor(game) {
    super(game, "Castle", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Castle;
