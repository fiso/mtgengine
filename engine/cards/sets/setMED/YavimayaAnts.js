"use strict";
const Constants = require ("../../../Constants");
const YavimayaAntsBase = require("../setALL/YavimayaAnts");

class YavimayaAnts extends YavimayaAntsBase {
  constructor(game) {
    super(game, "Yavimaya Ants", "Masters Edition", "MED");
  }
}

module.exports = YavimayaAnts;
