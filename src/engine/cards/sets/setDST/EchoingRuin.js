"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoingRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Echoing Ruin", "Darksteel", "DST");
  }
}

module.exports = EchoingRuin;
