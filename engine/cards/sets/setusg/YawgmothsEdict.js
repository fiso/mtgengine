"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YawgmothsEdictBase = require("../set7ED/YawgmothsEdict.js");

class YawgmothsEdict extends YawgmothsEdictBase {
  constructor(game) {
    super(game, "Yawgmoth's Edict", "Urza's Saga", "USG");
  }
}

module.exports = YawgmothsEdict;
