"use strict";
const Constants = require ("../../../Constants");
const SunspearShikariBase = require("../setC17/SunspearShikari");

class SunspearShikari extends SunspearShikariBase {
  constructor (game) {
    super(game, "Sunspear Shikari", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SunspearShikari;
