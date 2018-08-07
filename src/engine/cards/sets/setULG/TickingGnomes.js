"use strict";
const Constants = require ("../../../Constants");
const TickingGnomesBase = require("../setEMA/TickingGnomes");

class TickingGnomes extends TickingGnomesBase {
  constructor (game) {
    super(game, "Ticking Gnomes", "Urza's Legacy", "ULG");
  }
}

module.exports = TickingGnomes;
