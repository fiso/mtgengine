"use strict";
const Constants = require ("../../../Constants");
const ScaldingTarnBase = require("../setZEN/ScaldingTarn");

class ScaldingTarn extends ScaldingTarnBase {
  constructor (game) {
    super(game, "Scalding Tarn", "Zendikar Expedition", "EXP");
  }
}

module.exports = ScaldingTarn;
