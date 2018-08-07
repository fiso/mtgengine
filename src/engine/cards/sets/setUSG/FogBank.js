"use strict";
const Constants = require ("../../../Constants");
const FogBankBase = require("../setBBD/FogBank");

class FogBank extends FogBankBase {
  constructor (game) {
    super(game, "Fog Bank", "Urza's Saga", "USG");
  }
}

module.exports = FogBank;
