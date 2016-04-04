"use strict";
const Constants = require ("../../../Constants");
const CultivateBase = require("../setC13/Cultivate");

class Cultivate extends CultivateBase {
  constructor(game) {
    super(game, "Cultivate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Cultivate;
