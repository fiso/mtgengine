"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EchoTracerBase = require("../setDDN/EchoTracer.js");

class EchoTracer extends EchoTracerBase {
  constructor(game) {
    super(game, "Echo Tracer", "Legions", "LGN");
  }
}

module.exports = EchoTracer;
