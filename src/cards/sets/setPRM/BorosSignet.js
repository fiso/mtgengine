"use strict";
const Constants = require ("../../../Constants");
const BorosSignetBase = require("../setCM2/BorosSignet");

class BorosSignet extends BorosSignetBase {
  constructor (game) {
    super(game, "Boros Signet", "Magic Online Promos", "PRM");
  }
}

module.exports = BorosSignet;
