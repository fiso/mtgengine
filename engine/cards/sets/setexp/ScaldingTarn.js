"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScaldingTarnBase = require("../setZEN/ScaldingTarn.js");

class ScaldingTarn extends ScaldingTarnBase {
  constructor(game) {
    super(game, "Scalding Tarn", "Zendikar Expedition", "EXP");
  }
}

module.exports = ScaldingTarn;
