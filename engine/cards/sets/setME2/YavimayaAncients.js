"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaAncientsBase = require("../setALL/YavimayaAncients.js");

class YavimayaAncients extends YavimayaAncientsBase {
  constructor(game) {
    super(game, "Yavimaya Ancients", "Masters Edition II", "ME2");
  }
}

module.exports = YavimayaAncients;
