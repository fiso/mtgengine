"use strict";
const Constants = require ("../../../Constants");
const KalonianHydraBase = require("../setCM2/KalonianHydra");

class KalonianHydra extends KalonianHydraBase {
  constructor (game) {
    super(game, "Kalonian Hydra", "Commander 2016", "C16");
  }
}

module.exports = KalonianHydra;
