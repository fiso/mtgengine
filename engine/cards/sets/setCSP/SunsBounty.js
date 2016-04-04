"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunsBounty extends Card {
  constructor(game) {
    super(game, "Sun's Bounty", "Coldsnap", "CSP");
  }
}

module.exports = SunsBounty;
