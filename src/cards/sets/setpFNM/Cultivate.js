"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC13/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Friday Night Magic", "pFNM");
  }
}

module.exports = Cultivate;
