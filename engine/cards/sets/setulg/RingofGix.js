"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofGix extends Card {
  constructor(game) {
    super(game, "Ring of Gix", "Urza's Legacy", "ULG");
  }
}

module.exports = RingofGix;
