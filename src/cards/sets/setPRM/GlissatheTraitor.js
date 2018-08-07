"use strict";
const Constants = require ("../../../Constants");
const GlissatheTraitorBase = require("../setV16/GlissatheTraitor");

class GlissatheTraitor extends GlissatheTraitorBase {
  constructor (game) {
    super(game, "Glissa, the Traitor", "Magic Online Promos", "PRM");
  }
}

module.exports = GlissatheTraitor;
