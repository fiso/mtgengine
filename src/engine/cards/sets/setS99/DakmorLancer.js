"use strict";
const Constants = require ("../../../Constants");
const DakmorLancerBase = require("../set7ED/DakmorLancer");

class DakmorLancer extends DakmorLancerBase {
  constructor (game) {
    super(game, "Dakmor Lancer", "Starter 1999", "S99");
  }
}

module.exports = DakmorLancer;
