"use strict";
const Constants = require ("../../../Constants");
const RustedRelicBase = require("../setMM2/RustedRelic");

class RustedRelic extends RustedRelicBase {
  constructor(game) {
    super(game, "Rusted Relic", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RustedRelic;
