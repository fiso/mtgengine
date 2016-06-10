"use strict";
const Constants = require ("../../../Constants");
const YavimayaElderBase = require("../setDDE/YavimayaElder");

class YavimayaElder extends YavimayaElderBase {
  constructor (game) {
    super(game, "Yavimaya Elder", "Vintage Masters", "VMA");
  }
}

module.exports = YavimayaElder;
