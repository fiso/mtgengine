"use strict";
const Constants = require ("../../../Constants");
const FalkenrathAristocratBase = require("../setMM3/FalkenrathAristocrat");

class FalkenrathAristocrat extends FalkenrathAristocratBase {
  constructor (game) {
    super(game, "Falkenrath Aristocrat", "Dark Ascension", "DKA");
  }
}

module.exports = FalkenrathAristocrat;
