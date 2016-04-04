"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningInquiry extends Card {
  constructor(game) {
    super(game, "Burning Inquiry", "Magic 2010", "M10");
  }
}

module.exports = BurningInquiry;
