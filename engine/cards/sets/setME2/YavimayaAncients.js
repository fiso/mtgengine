"use strict";
const Constants = require ("../../../Constants");
const YavimayaAncientsBase = require("../setALL/YavimayaAncients");

class YavimayaAncients extends YavimayaAncientsBase {
  constructor(game) {
    super(game, "Yavimaya Ancients", "Masters Edition II", "ME2");
  }
}

module.exports = YavimayaAncients;
