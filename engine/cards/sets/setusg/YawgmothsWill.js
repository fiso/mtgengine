"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YawgmothsWillBase = require("../setpJGP/YawgmothsWill.js");

class YawgmothsWill extends YawgmothsWillBase {
  constructor(game) {
    super(game, "Yawgmoth's Will", "Urza's Saga", "USG");
  }
}

module.exports = YawgmothsWill;
