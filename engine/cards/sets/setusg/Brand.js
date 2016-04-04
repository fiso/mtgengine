"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brand extends Card {
  constructor(game) {
    super(game, "Brand", "Urza's Saga", "USG");
  }
}

module.exports = Brand;
