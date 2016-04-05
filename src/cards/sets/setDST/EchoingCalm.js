"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingCalm extends UnimplementedCard {
  constructor(game) {
    super(game, "Echoing Calm", "Darksteel", "DST");
  }
}

module.exports = EchoingCalm;
