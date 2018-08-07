"use strict";
const Constants = require ("../../../Constants");
const YavimayaWurmBase = require("../setM11/YavimayaWurm");

class YavimayaWurm extends YavimayaWurmBase {
  constructor (game) {
    super(game, "Yavimaya Wurm", "Urza's Legacy", "ULG");
  }
}

module.exports = YavimayaWurm;
