"use strict";
const Constants = require ("../../../Constants");
const GruulSignetBase = require("../setARC/GruulSignet");

class GruulSignet extends GruulSignetBase {
  constructor (game) {
    super(game, "Gruul Signet", "Guildpact", "GPT");
  }
}

module.exports = GruulSignet;
