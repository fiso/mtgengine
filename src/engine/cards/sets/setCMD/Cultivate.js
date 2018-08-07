"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC18/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Commander 2011", "CMD");
  }
}

module.exports = Cultivate;
