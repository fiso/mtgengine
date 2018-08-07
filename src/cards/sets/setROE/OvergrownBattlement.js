"use strict";
const Constants = require ("../../../Constants");
const OvergrownBattlementBase = require("../setIMA/OvergrownBattlement");

class OvergrownBattlement extends OvergrownBattlementBase {
  constructor (game) {
    super(game, "Overgrown Battlement", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OvergrownBattlement;
