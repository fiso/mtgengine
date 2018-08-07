"use strict";
const Constants = require ("../../../Constants");
const BaneofProgressBase = require("../setCMA/BaneofProgress");

class BaneofProgress extends BaneofProgressBase {
  constructor (game) {
    super(game, "Bane of Progress", "Commander 2015", "C15");
  }
}

module.exports = BaneofProgress;
