"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MerfolkSkyscout extends Card {
  constructor(game) {
    super(game, "Merfolk Skyscout", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MerfolkSkyscout;
