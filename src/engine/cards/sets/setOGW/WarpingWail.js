"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarpingWail extends UnimplementedCard {
  constructor (game) {
    super(game, "Warping Wail", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = WarpingWail;
