"use strict";
const Constants = require ("../../../Constants");
const LotusCobraBase = require("../setIMA/LotusCobra");

class LotusCobra extends LotusCobraBase {
  constructor (game) {
    super(game, "Lotus Cobra", "Magic Online Promos", "PRM");
  }
}

module.exports = LotusCobra;
