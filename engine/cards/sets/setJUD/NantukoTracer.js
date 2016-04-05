"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoTracer extends UnimplementedCard {
  constructor(game) {
    super(game, "Nantuko Tracer", "Judgment", "JUD");
  }
}

module.exports = NantukoTracer;
