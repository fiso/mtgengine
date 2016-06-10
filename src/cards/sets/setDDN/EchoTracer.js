"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoTracer extends UnimplementedCard {
  constructor (game) {
    super(game, "Echo Tracer", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = EchoTracer;
