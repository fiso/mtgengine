"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColfenorsUrn extends UnimplementedCard {
  constructor (game) {
    super(game, "Colfenor's Urn", "Lorwyn", "LRW");
  }
}

module.exports = ColfenorsUrn;
