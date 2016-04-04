"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThassasBounty extends Card {
  constructor(game) {
    super(game, "Thassa's Bounty", "Theros", "THS");
  }
}

module.exports = ThassasBounty;
