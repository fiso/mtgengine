"use strict";
const Constants = require ("../../../Constants");
const LotusCobraBase = require("../setIMA/LotusCobra");

class LotusCobra extends LotusCobraBase {
  constructor (game) {
    super(game, "Lotus Cobra", "Grand Prix Promos", "PGPX");
  }
}

module.exports = LotusCobra;
