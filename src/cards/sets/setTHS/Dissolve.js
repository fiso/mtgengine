"use strict";
const Constants = require ("../../../Constants");
const DissolveBase = require("../setIMA/Dissolve");

class Dissolve extends DissolveBase {
  constructor (game) {
    super(game, "Dissolve", "Theros", "THS");
  }
}

module.exports = Dissolve;
