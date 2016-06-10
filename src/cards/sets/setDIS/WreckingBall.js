"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WreckingBall extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrecking Ball", "Dissension", "DIS");
  }
}

module.exports = WreckingBall;
