"use strict";
const Constants = require ("../../../Constants");
const SlithFirewalkerBase = require("../setJVC/SlithFirewalker");

class SlithFirewalker extends SlithFirewalkerBase {
  constructor (game) {
    super(game, "Slith Firewalker", "Magic Online Promos", "PRM");
  }
}

module.exports = SlithFirewalker;
