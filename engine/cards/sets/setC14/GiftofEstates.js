"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftofEstates extends Card {
  constructor(game) {
    super(game, "Gift of Estates", "Commander 2014", "C14");
  }
}

module.exports = GiftofEstates;
