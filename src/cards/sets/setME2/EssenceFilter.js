"use strict";
const Constants = require ("../../../Constants");
const EssenceFilterBase = require("../setICE/EssenceFilter");

class EssenceFilter extends EssenceFilterBase {
  constructor (game) {
    super(game, "Essence Filter", "Masters Edition II", "ME2");
  }
}

module.exports = EssenceFilter;
