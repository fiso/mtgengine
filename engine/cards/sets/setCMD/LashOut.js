"use strict";
const Constants = require ("../../../Constants");
const LashOutBase = require("../setLRW/LashOut");

class LashOut extends LashOutBase {
  constructor(game) {
    super(game, "Lash Out", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = LashOut;
