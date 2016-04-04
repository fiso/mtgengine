"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PharikasMender extends Card {
  constructor(game) {
    super(game, "Pharika's Mender", "Theros", "THS");
  }
}

module.exports = PharikasMender;
