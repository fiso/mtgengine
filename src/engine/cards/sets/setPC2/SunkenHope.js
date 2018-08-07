"use strict";
const Constants = require ("../../../Constants");
const SunkenHopeBase = require("../setPCA/SunkenHope");

class SunkenHope extends SunkenHopeBase {
  constructor (game) {
    super(game, "Sunken Hope", "Planechase 2012", "PC2");
  }
}

module.exports = SunkenHope;
