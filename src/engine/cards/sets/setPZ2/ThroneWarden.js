"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThroneWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Throne Warden", "You Make the Cube", "PZ2");
  }
}

module.exports = ThroneWarden;
