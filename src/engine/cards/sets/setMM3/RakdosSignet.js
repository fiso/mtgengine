"use strict";
const Constants = require ("../../../Constants");
const RakdosSignetBase = require("../setC17/RakdosSignet");

class RakdosSignet extends RakdosSignetBase {
  constructor (game) {
    super(game, "Rakdos Signet", "Modern Masters 2017", "MM3");
  }
}

module.exports = RakdosSignet;
