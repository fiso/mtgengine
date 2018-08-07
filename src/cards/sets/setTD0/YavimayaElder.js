"use strict";
const Constants = require ("../../../Constants");
const YavimayaElderBase = require("../setC18/YavimayaElder");

class YavimayaElder extends YavimayaElderBase {
  constructor (game) {
    super(game, "Yavimaya Elder", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = YavimayaElder;
