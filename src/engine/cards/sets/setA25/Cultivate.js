"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC18/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Masters 25", "A25");
  }
}

module.exports = Cultivate;
