"use strict";
const Constants = require ("../../../Constants");
const YawgmothsWillBase = require("../setVMA/YawgmothsWill");

class YawgmothsWill extends YawgmothsWillBase {
  constructor (game) {
    super(game, "Yawgmoth's Will", "Judge Gift Cards 2007", "G07");
  }
}

module.exports = YawgmothsWill;
