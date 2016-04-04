"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpharasWarden extends Card {
  constructor(game) {
    super(game, "Ephara's Warden", "Theros", "THS");
  }
}

module.exports = EpharasWarden;
