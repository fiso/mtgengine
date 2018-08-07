"use strict";
const Constants = require ("../../../Constants");
const YavimayaHollowBase = require("../setVMA/YavimayaHollow");

class YavimayaHollow extends YavimayaHollowBase {
  constructor (game) {
    super(game, "Yavimaya Hollow", "Urza's Destiny", "UDS");
  }
}

module.exports = YavimayaHollow;
