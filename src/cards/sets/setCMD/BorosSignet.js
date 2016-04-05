"use strict";
const Constants = require ("../../../Constants");
const BorosSignetBase = require("../setC15/BorosSignet");

class BorosSignet extends BorosSignetBase {
  constructor(game) {
    super(game, "Boros Signet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BorosSignet;
