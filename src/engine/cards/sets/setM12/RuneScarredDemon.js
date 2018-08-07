"use strict";
const Constants = require ("../../../Constants");
const RuneScarredDemonBase = require("../setIMA/RuneScarredDemon");

class RuneScarredDemon extends RuneScarredDemonBase {
  constructor (game) {
    super(game, "Rune-Scarred Demon", "Magic 2012", "M12");
  }
}

module.exports = RuneScarredDemon;
