"use strict";
const Constants = require ("../../../Constants");
const EssenceScatterBase = require("../setM19/EssenceScatter");

class EssenceScatter extends EssenceScatterBase {
  constructor (game) {
    super(game, "Essence Scatter", "Amonkhet", "AKH");
  }
}

module.exports = EssenceScatter;
