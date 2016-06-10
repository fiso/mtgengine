"use strict";
const Constants = require ("../../../Constants");
const EssenceScatterBase = require("../setDPA/EssenceScatter");

class EssenceScatter extends EssenceScatterBase {
  constructor (game) {
    super(game, "Essence Scatter", "Magic 2010", "M10");
  }
}

module.exports = EssenceScatter;
