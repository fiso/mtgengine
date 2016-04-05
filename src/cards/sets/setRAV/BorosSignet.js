"use strict";
const Constants = require ("../../../Constants");
const BorosSignetBase = require("../setC15/BorosSignet");

class BorosSignet extends BorosSignetBase {
  constructor(game) {
    super(game, "Boros Signet", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosSignet;
