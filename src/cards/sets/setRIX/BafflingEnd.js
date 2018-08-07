"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BafflingEnd extends UnimplementedCard {
  constructor (game) {
    super(game, "Baffling End", "Rivals of Ixalan", "RIX");
  }
}

module.exports = BafflingEnd;
