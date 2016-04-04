"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StriderHarness extends Card {
  constructor(game) {
    super(game, "Strider Harness", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StriderHarness;
