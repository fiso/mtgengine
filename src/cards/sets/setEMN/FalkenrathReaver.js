"use strict";
const Constants = require ("../../../Constants");
const FalkenrathReaverBase = require("../setW17/FalkenrathReaver");

class FalkenrathReaver extends FalkenrathReaverBase {
  constructor (game) {
    super(game, "Falkenrath Reaver", "Eldritch Moon", "EMN");
  }
}

module.exports = FalkenrathReaver;
