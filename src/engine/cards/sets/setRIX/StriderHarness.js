"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StriderHarness extends UnimplementedCard {
  constructor (game) {
    super(game, "Strider Harness", "Rivals of Ixalan", "RIX");
  }
}

module.exports = StriderHarness;
