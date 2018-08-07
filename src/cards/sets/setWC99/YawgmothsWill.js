"use strict";
const Constants = require ("../../../Constants");
const YawgmothsWillBase = require("../setVMA/YawgmothsWill");

class YawgmothsWill extends YawgmothsWillBase {
  constructor (game) {
    super(game, "Yawgmoth's Will", "World Championship Decks 1999", "WC99");
  }
}

module.exports = YawgmothsWill;
