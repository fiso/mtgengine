"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UntamedWilds extends Card {
  constructor(game) {
    super(game, "Untamed Wilds", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UntamedWilds;
