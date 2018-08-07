"use strict";
const Constants = require ("../../../Constants");
const BaneofProgressBase = require("../setCMA/BaneofProgress");

class BaneofProgress extends BaneofProgressBase {
  constructor (game) {
    super(game, "Bane of Progress", "Commander 2013", "C13");
  }
}

module.exports = BaneofProgress;
