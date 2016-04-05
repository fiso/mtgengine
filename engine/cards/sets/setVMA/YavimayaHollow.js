"use strict";
const Constants = require ("../../../Constants");
const YavimayaHollowBase = require("../setUDS/YavimayaHollow");

class YavimayaHollow extends YavimayaHollowBase {
  constructor(game) {
    super(game, "Yavimaya Hollow", "Vintage Masters", "VMA");
  }
}

module.exports = YavimayaHollow;
