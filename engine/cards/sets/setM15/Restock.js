"use strict";
const Constants = require ("../../../Constants");
const RestockBase = require("../setINV/Restock");

class Restock extends RestockBase {
  constructor(game) {
    super(game, "Restock", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Restock;
