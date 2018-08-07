"use strict";
const Constants = require ("../../../Constants");
const LotusCobraBase = require("../setIMA/LotusCobra");

class LotusCobra extends LotusCobraBase {
  constructor (game) {
    super(game, "Lotus Cobra", "Zendikar", "ZEN");
  }
}

module.exports = LotusCobra;
