"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvilPresents extends Card {
  constructor(game) {
    super(game, "Evil Presents", "Happy Holidays", "pHHO");
  }
}

module.exports = EvilPresents;
