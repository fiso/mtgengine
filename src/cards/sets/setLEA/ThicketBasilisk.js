"use strict";
const Constants = require ("../../../Constants");
const ThicketBasiliskBase = require("../setMED/ThicketBasilisk");

class ThicketBasilisk extends ThicketBasiliskBase {
  constructor (game) {
    super(game, "Thicket Basilisk", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ThicketBasilisk;
