"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SatyrPiper extends Card {
  constructor(game) {
    super(game, "Satyr Piper", "Theros", "THS");
  }
}

module.exports = SatyrPiper;
