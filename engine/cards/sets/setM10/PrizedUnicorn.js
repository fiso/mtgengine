"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrizedUnicorn extends Card {
  constructor(game) {
    super(game, "Prized Unicorn", "Magic 2010", "M10");
  }
}

module.exports = PrizedUnicorn;
