"use strict";
const Constants = require ("../../../Constants");
const SlithStriderBase = require("../setDDI/SlithStrider");

class SlithStrider extends SlithStriderBase {
  constructor(game) {
    super(game, "Slith Strider", "Mirrodin", "MRD");
  }
}

module.exports = SlithStrider;
