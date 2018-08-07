"use strict";
const Constants = require ("../../../Constants");
const KalonianHydraBase = require("../setCM2/KalonianHydra");

class KalonianHydra extends KalonianHydraBase {
  constructor (game) {
    super(game, "Kalonian Hydra", "Magic 2014", "M14");
  }
}

module.exports = KalonianHydra;
