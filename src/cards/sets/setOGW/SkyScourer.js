"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyScourer extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Scourer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SkyScourer;
