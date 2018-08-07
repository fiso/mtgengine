"use strict";
const Constants = require ("../../../Constants");
const EssenceScatterBase = require("../setM19/EssenceScatter");

class EssenceScatter extends EssenceScatterBase {
  constructor (game) {
    super(game, "Essence Scatter", "Magic 2014", "M14");
  }
}

module.exports = EssenceScatter;
