"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingDecay extends UnimplementedCard {
  constructor(game) {
    super(game, "Echoing Decay", "Darksteel", "DST");
  }
}

module.exports = EchoingDecay;
