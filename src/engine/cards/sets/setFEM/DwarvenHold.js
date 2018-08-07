"use strict";
const Constants = require ("../../../Constants");
const DwarvenHoldBase = require("../set5ED/DwarvenHold");

class DwarvenHold extends DwarvenHoldBase {
  constructor (game) {
    super(game, "Dwarven Hold", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenHold;
