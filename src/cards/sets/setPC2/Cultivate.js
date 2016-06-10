"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC13/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Cultivate;
