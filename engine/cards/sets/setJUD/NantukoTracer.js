"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoTracer extends Card {
  constructor(game) {
    super(game, "Nantuko Tracer", "Judgment", "JUD");
  }
}

module.exports = NantukoTracer;
