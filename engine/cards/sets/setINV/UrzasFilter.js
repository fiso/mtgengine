"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrzasFilter extends Card {
  constructor(game) {
    super(game, "Urza's Filter", "Invasion", "INV");
  }
}

module.exports = UrzasFilter;
