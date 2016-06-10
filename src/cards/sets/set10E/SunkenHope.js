"use strict";
const Constants = require ("../../../Constants");
const SunkenHopeBase = require("../setPC2/SunkenHope");

class SunkenHope extends SunkenHopeBase {
  constructor (game) {
    super(game, "Sunken Hope", "Tenth Edition", "10E");
  }
}

module.exports = SunkenHope;
