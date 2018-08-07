"use strict";
const Constants = require ("../../../Constants");
const UndercityTrollBase = require("../setIMA/UndercityTroll");

class UndercityTroll extends UndercityTrollBase {
  constructor (game) {
    super(game, "Undercity Troll", "Magic Origins", "ORI");
  }
}

module.exports = UndercityTroll;
