"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenScarab extends UnimplementedCard {
  constructor (game) {
    super(game, "Green Scarab", "Ice Age", "ICE");
  }
}

module.exports = GreenScarab;
