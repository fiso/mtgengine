"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaHollowBase = require("../setUDS/YavimayaHollow.js");

class YavimayaHollow extends YavimayaHollowBase {
  constructor(game) {
    super(game, "Yavimaya Hollow", "Vintage Masters", "VMA");
  }
}

module.exports = YavimayaHollow;
