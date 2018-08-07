"use strict";
const Constants = require ("../../../Constants");
const YavimayaAntsBase = require("../setMED/YavimayaAnts");

class YavimayaAnts extends YavimayaAntsBase {
  constructor (game) {
    super(game, "Yavimaya Ants", "Deckmasters", "DKM");
  }
}

module.exports = YavimayaAnts;
