"use strict";
const Constants = require ("../../../Constants");
const WanderlustBase = require("../setCED/Wanderlust");

class Wanderlust extends WanderlustBase {
  constructor (game) {
    super(game, "Wanderlust", "International Collector's Edition", "CEI");
  }
}

module.exports = Wanderlust;
