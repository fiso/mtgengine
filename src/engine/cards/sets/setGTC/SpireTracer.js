"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpireTracer extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Tracer", "Gatecrash", "GTC");
  }
}

module.exports = SpireTracer;
