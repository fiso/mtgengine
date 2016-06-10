"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC13/Cultivate");

class Cultivate extends CultivateBase {
  constructor (game) {
    super(game, "Cultivate", "Magic 2011", "M11");
  }
}

module.exports = Cultivate;
