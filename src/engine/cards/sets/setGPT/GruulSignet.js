"use strict";
const Constants = require ("../../../Constants");
const GruulSignetBase = require("../setMM3/GruulSignet");

class GruulSignet extends GruulSignetBase {
  constructor (game) {
    super(game, "Gruul Signet", "Guildpact", "GPT");
  }
}

module.exports = GruulSignet;
