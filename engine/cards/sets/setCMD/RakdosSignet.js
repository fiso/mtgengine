"use strict";
const Constants = require ("../../../Constants");
const RakdosSignetBase = require("../setARC/RakdosSignet");

class RakdosSignet extends RakdosSignetBase {
  constructor(game) {
    super(game, "Rakdos Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RakdosSignet;
