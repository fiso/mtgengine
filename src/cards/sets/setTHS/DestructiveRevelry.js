"use strict";
const Constants = require ("../../../Constants");
const DestructiveRevelryBase = require("../setDDL/DestructiveRevelry");

class DestructiveRevelry extends DestructiveRevelryBase {
  constructor (game) {
    super(game, "Destructive Revelry", "Theros", "THS");
  }
}

module.exports = DestructiveRevelry;
