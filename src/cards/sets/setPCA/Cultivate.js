"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC18/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Planechase Anthology", "PCA");
  }
}

module.exports = Cultivate;
