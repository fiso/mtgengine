"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoldenWish extends Card {
  constructor(game) {
    super(game, "Golden Wish", "Judgment", "JUD");
  }
}

module.exports = GoldenWish;
