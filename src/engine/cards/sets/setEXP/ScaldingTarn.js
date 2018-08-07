"use strict";
const Constants = require ("../../../Constants");
const ScaldingTarnBase = require("../setMM3/ScaldingTarn");

class ScaldingTarn extends ScaldingTarnBase {
  constructor (game) {
    super(game, "Scalding Tarn", "Zendikar Expeditions", "EXP");
  }
}

module.exports = ScaldingTarn;
