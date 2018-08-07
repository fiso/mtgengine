"use strict";
const Constants = require ("../../../Constants");
const YavimayaElderBase = require("../setC18/YavimayaElder");

class YavimayaElder extends YavimayaElderBase {
  constructor (game) {
    super(game, "Yavimaya Elder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = YavimayaElder;
