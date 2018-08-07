"use strict";
const Constants = require ("../../../Constants");
const YawgmothsWillBase = require("../setVMA/YawgmothsWill");

class YawgmothsWill extends YawgmothsWillBase {
  constructor (game) {
    super(game, "Yawgmoth's Will", "World Championship Decks 2000", "WC00");
  }
}

module.exports = YawgmothsWill;
