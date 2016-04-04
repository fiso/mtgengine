"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatalBlow extends Card {
  constructor(game) {
    super(game, "Fatal Blow", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FatalBlow;
