"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarshMercy extends Card {
  constructor(game) {
    super(game, "Harsh Mercy", "Onslaught", "ONS");
  }
}

module.exports = HarshMercy;
