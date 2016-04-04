"use strict";
const Constants = require ("../../../Constants");
const FogBankBase = require("../setC13/FogBank");

class FogBank extends FogBankBase {
  constructor(game) {
    super(game, "Fog Bank", "Magic 2013", "M13");
  }
}

module.exports = FogBank;
