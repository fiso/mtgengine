"use strict";
const Constants = require ("../../../Constants");
const BasiliskCollarBase = require("../setMM3/BasiliskCollar");

class BasiliskCollar extends BasiliskCollarBase {
  constructor (game) {
    super(game, "Basilisk Collar", "Worldwake", "WWK");
  }
}

module.exports = BasiliskCollar;
