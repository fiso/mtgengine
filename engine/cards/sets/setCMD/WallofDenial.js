"use strict";
const Constants = require ("../../../Constants");
const WallofDenialBase = require("../setARB/WallofDenial");

class WallofDenial extends WallofDenialBase {
  constructor(game) {
    super(game, "Wall of Denial", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = WallofDenial;
