"use strict";
const Constants = require ("../../../Constants");
const ThicketBasiliskBase = require("../set6ED/ThicketBasilisk");

class ThicketBasilisk extends ThicketBasiliskBase {
  constructor (game) {
    super(game, "Thicket Basilisk", "International Collector's Edition", "CEI");
  }
}

module.exports = ThicketBasilisk;
