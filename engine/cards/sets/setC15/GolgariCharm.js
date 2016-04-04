"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GolgariCharm extends Card {
  constructor(game) {
    super(game, "Golgari Charm", "Commander 2015", "C15");
  }
}

module.exports = GolgariCharm;
