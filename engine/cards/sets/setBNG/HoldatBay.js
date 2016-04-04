"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoldatBay extends Card {
  constructor(game) {
    super(game, "Hold at Bay", "Born of the Gods", "BNG");
  }
}

module.exports = HoldatBay;
