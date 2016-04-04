"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MogissMarauder extends Card {
  constructor(game) {
    super(game, "Mogis's Marauder", "Theros", "THS");
  }
}

module.exports = MogissMarauder;
