"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Teferi's Sentinel", "Dominaria", "DOM");
  }
}

module.exports = TeferisSentinel;
