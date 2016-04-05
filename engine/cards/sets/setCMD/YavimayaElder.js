"use strict";
const Constants = require ("../../../Constants");
const YavimayaElderBase = require("../setDDE/YavimayaElder");

class YavimayaElder extends YavimayaElderBase {
  constructor(game) {
    super(game, "Yavimaya Elder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = YavimayaElder;
