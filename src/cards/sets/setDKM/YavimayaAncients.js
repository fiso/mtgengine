"use strict";
const Constants = require ("../../../Constants");
const YavimayaAncientsBase = require("../setALL/YavimayaAncients");

class YavimayaAncients extends YavimayaAncientsBase {
  constructor (game) {
    super(game, "Yavimaya Ancients", "Deckmasters", "DKM");
  }
}

module.exports = YavimayaAncients;
