"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronRover extends UnimplementedCard {
  constructor (game) {
    super(game, "Hedron Rover", "Worldwake", "WWK");
  }
}

module.exports = HedronRover;
