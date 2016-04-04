"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SigilTracer extends Card {
  constructor(game) {
    super(game, "Sigil Tracer", "Morningtide", "MOR");
  }
}

module.exports = SigilTracer;
