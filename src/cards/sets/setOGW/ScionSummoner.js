"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScionSummoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Scion Summoner", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ScionSummoner;
