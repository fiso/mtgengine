"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GravelSlinger extends Card {
  constructor(game) {
    super(game, "Gravel Slinger", "Onslaught", "ONS");
  }
}

module.exports = GravelSlinger;
