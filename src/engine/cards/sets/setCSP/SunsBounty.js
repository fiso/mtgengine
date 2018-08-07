"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunsBounty extends UnimplementedCard {
  constructor (game) {
    super(game, "Sun's Bounty", "Coldsnap", "CSP");
  }
}

module.exports = SunsBounty;
