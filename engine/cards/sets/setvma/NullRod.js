"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NullRod extends Card {
  constructor(game) {
    super(game, "Null Rod", "Vintage Masters", "VMA");
  }
}

module.exports = NullRod;
