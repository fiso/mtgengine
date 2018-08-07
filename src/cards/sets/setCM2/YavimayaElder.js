"use strict";
const Constants = require ("../../../Constants");
const YavimayaElderBase = require("../setC18/YavimayaElder");

class YavimayaElder extends YavimayaElderBase {
  constructor (game) {
    super(game, "Yavimaya Elder", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = YavimayaElder;
