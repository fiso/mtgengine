"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GroundPounder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ground Pounder", "Unstable", "UST");
  }
}

module.exports = GroundPounder;
