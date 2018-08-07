"use strict";
const Constants = require ("../../../Constants");
const GruulSignetBase = require("../setMM3/GruulSignet");

class GruulSignet extends GruulSignetBase {
  constructor (game) {
    super(game, "Gruul Signet", "Commander 2016", "C16");
  }
}

module.exports = GruulSignet;
