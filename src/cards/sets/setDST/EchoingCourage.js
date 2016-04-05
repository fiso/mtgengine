"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingCourage extends UnimplementedCard {
  constructor(game) {
    super(game, "Echoing Courage", "Darksteel", "DST");
  }
}

module.exports = EchoingCourage;
