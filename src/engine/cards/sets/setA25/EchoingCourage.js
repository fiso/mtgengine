"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingCourage extends UnimplementedCard {
  constructor (game) {
    super(game, "Echoing Courage", "Masters 25", "A25");
  }
}

module.exports = EchoingCourage;
