"use strict";
const Constants = require ("../../../Constants");
const ShuYuntheSilentTempestBase = require("../setFRF/ShuYuntheSilentTempest");

class ShuYuntheSilentTempest extends ShuYuntheSilentTempestBase {
  constructor (game) {
    super(game, "Shu Yun, the Silent Tempest", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = ShuYuntheSilentTempest;
