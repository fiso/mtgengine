"use strict";
const Constants = require ("../../../Constants");
const EchoTracerBase = require("../setDDN/EchoTracer");

class EchoTracer extends EchoTracerBase {
  constructor (game) {
    super(game, "Echo Tracer", "Legions", "LGN");
  }
}

module.exports = EchoTracer;
