"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC18/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Cultivate;
