"use strict";
const Constants = require ("../../../Constants");
const ThicketBasiliskBase = require("../setMED/ThicketBasilisk");

class ThicketBasilisk extends ThicketBasiliskBase {
  constructor (game) {
    super(game, "Thicket Basilisk", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ThicketBasilisk;
