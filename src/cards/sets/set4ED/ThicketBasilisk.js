"use strict";
const Constants = require ("../../../Constants");
const ThicketBasiliskBase = require("../set6ED/ThicketBasilisk");

class ThicketBasilisk extends ThicketBasiliskBase {
  constructor(game) {
    super(game, "Thicket Basilisk", "Fourth Edition", "4ED");
  }
}

module.exports = ThicketBasilisk;
