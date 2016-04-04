"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RustedRelicBase = require("../setMM2/RustedRelic.js");

class RustedRelic extends RustedRelicBase {
  constructor(game) {
    super(game, "Rusted Relic", "Scars of Mirrodin", "SOM");
  }
}

module.exports = RustedRelic;
