"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FogBankBase = require("../setC13/FogBank.js");

class FogBank extends FogBankBase {
  constructor(game) {
    super(game, "Fog Bank", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = FogBank;
