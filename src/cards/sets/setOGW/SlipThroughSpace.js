"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlipThroughSpace extends UnimplementedCard {
  constructor(game) {
    super(game, "Slip Through Space", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SlipThroughSpace;
