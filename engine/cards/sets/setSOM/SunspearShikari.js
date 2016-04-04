"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunspearShikariBase = require("../setMM2/SunspearShikari.js");

class SunspearShikari extends SunspearShikariBase {
  constructor(game) {
    super(game, "Sunspear Shikari", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SunspearShikari;
