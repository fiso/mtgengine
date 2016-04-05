"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StriderHarness extends UnimplementedCard {
  constructor(game) {
    super(game, "Strider Harness", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StriderHarness;
