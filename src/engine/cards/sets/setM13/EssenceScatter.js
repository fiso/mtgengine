"use strict";
const Constants = require ("../../../Constants");
const EssenceScatterBase = require("../setM19/EssenceScatter");

class EssenceScatter extends EssenceScatterBase {
  constructor (game) {
    super(game, "Essence Scatter", "Magic 2013", "M13");
  }
}

module.exports = EssenceScatter;
