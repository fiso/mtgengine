"use strict";
const Constants = require ("../../../Constants");
const LeoninShikariBase = require("../setC17/LeoninShikari");

class LeoninShikari extends LeoninShikariBase {
  constructor (game) {
    super(game, "Leonin Shikari", "Darksteel", "DST");
  }
}

module.exports = LeoninShikari;
