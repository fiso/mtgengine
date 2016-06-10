"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilTracer extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigil Tracer", "Morningtide", "MOR");
  }
}

module.exports = SigilTracer;
