"use strict";
const Constants = require ("../../../Constants");
const FogBankBase = require("../setBBD/FogBank");

class FogBank extends FogBankBase {
  constructor (game) {
    super(game, "Fog Bank", "Commander 2011", "CMD");
  }
}

module.exports = FogBank;
