"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieMiscreant extends Card {
  constructor(game) {
    super(game, "Faerie Miscreant", "Magic Origins", "ORI");
  }
}

module.exports = FaerieMiscreant;
