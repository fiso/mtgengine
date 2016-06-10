"use strict";
const Constants = require ("../../../Constants");
const LotusCobraBase = require("../setpGPX/LotusCobra");

class LotusCobra extends LotusCobraBase {
  constructor (game) {
    super(game, "Lotus Cobra", "Zendikar", "ZEN");
  }
}

module.exports = LotusCobra;
