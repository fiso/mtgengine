"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosSignetBase = require("../setARC/RakdosSignet.js");

class RakdosSignet extends RakdosSignetBase {
  constructor(game) {
    super(game, "Rakdos Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RakdosSignet;
