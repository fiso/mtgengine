"use strict";
const Constants = require ("../../../Constants");
const GlissatheTraitorBase = require("../setV16/GlissatheTraitor");

class GlissatheTraitor extends GlissatheTraitorBase {
  constructor (game) {
    super(game, "Glissa, the Traitor", "Mirrodin Besieged Promos", "PMBS");
  }
}

module.exports = GlissatheTraitor;
