"use strict";
const Constants = require ("../../../Constants");
const RakdosSignetBase = require("../setC17/RakdosSignet");

class RakdosSignet extends RakdosSignetBase {
  constructor (game) {
    super(game, "Rakdos Signet", "Dissension", "DIS");
  }
}

module.exports = RakdosSignet;
