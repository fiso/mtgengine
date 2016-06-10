"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkmothWell extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinkmoth Well", "Mirrodin", "MRD");
  }
}

module.exports = BlinkmothWell;
