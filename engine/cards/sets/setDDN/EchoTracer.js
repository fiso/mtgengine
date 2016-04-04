"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EchoTracer extends Card {
  constructor(game) {
    super(game, "Echo Tracer", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = EchoTracer;
