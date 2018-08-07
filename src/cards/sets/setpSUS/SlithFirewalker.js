"use strict";
const Constants = require ("../../../Constants");
const SlithFirewalkerBase = require("../setJVC/SlithFirewalker");

class SlithFirewalker extends SlithFirewalkerBase {
  constructor (game) {
    super(game, "Slith Firewalker", "Junior Super Series", "PSUS");
  }
}

module.exports = SlithFirewalker;
