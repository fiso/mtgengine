"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC18/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Planechase 2012", "PC2");
  }
}

module.exports = Cultivate;
