"use strict";
const Constants = require ("../../../Constants");
const YavimayaWurmBase = require("../setBTD/YavimayaWurm");

class YavimayaWurm extends YavimayaWurmBase {
  constructor (game) {
    super(game, "Yavimaya Wurm", "Urza's Legacy", "ULG");
  }
}

module.exports = YavimayaWurm;
