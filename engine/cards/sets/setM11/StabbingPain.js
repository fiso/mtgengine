"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StabbingPain extends Card {
  constructor(game) {
    super(game, "Stabbing Pain", "Magic 2011", "M11");
  }
}

module.exports = StabbingPain;
