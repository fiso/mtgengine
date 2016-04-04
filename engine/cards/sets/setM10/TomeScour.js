"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TomeScour extends Card {
  constructor(game) {
    super(game, "Tome Scour", "Magic 2010", "M10");
  }
}

module.exports = TomeScour;
