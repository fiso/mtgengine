"use strict";
const Constants = require ("../../../Constants");
const TombstalkerBase = require("../setMMA/Tombstalker");

class Tombstalker extends TombstalkerBase {
  constructor (game) {
    super(game, "Tombstalker", "Future Sight", "FUT");
  }
}

module.exports = Tombstalker;
