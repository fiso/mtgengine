"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlinkmothInfusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinkmoth Infusion", "Fifth Dawn", "5DN");
  }
}

module.exports = BlinkmothInfusion;
