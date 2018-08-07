"use strict";
const Constants = require ("../../../Constants");
const EssenceFilterBase = require("../setME2/EssenceFilter");

class EssenceFilter extends EssenceFilterBase {
  constructor (game) {
    super(game, "Essence Filter", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = EssenceFilter;
