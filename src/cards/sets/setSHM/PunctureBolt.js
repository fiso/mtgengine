"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PunctureBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Puncture Bolt", "Shadowmoor", "SHM");
  }
}

module.exports = PunctureBolt;
