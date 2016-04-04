"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlisteringFirecat extends Card {
  constructor(game) {
    super(game, "Blistering Firecat", "Onslaught", "ONS");
  }
}

module.exports = BlisteringFirecat;
