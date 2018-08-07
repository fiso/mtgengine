"use strict";
const Constants = require ("../../../Constants");
const FreedfromtheRealBase = require("../setA25/FreedfromtheReal");

class FreedfromtheReal extends FreedfromtheRealBase {
  constructor (game) {
    super(game, "Freed from the Real", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = FreedfromtheReal;
