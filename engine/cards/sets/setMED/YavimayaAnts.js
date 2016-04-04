"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaAntsBase = require("../setALL/YavimayaAnts.js");

class YavimayaAnts extends YavimayaAntsBase {
  constructor(game) {
    super(game, "Yavimaya Ants", "Masters Edition", "MED");
  }
}

module.exports = YavimayaAnts;
