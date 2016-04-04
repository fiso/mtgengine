"use strict";
const Constants = require ("../../../Constants");
const FogBankBase = require("../setC13/FogBank");

class FogBank extends FogBankBase {
  constructor(game) {
    super(game, "Fog Bank", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FogBank;
