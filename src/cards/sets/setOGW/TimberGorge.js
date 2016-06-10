"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberGorge extends UnimplementedCard {
  constructor (game) {
    super(game, "Timber Gorge", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TimberGorge;
