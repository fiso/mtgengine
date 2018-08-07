"use strict";
const Constants = require ("../../../Constants");
const FogBankBase = require("../setBBD/FogBank");

class FogBank extends FogBankBase {
  constructor (game) {
    super(game, "Fog Bank", "Commander 2013", "C13");
  }
}

module.exports = FogBank;
