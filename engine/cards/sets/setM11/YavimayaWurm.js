"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaWurmBase = require("../setBTD/YavimayaWurm.js");

class YavimayaWurm extends YavimayaWurmBase {
  constructor(game) {
    super(game, "Yavimaya Wurm", "Magic 2011", "M11");
  }
}

module.exports = YavimayaWurm;
