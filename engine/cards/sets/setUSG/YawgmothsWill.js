"use strict";
const Constants = require ("../../../Constants");
const YawgmothsWillBase = require("../setpJGP/YawgmothsWill");

class YawgmothsWill extends YawgmothsWillBase {
  constructor(game) {
    super(game, "Yawgmoth's Will", "Urza's Saga", "USG");
  }
}

module.exports = YawgmothsWill;
