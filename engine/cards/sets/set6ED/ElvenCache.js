"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvenCache extends Card {
  constructor(game) {
    super(game, "Elven Cache", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvenCache;
