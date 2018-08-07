"use strict";
const Constants = require ("../../../Constants");
const SmallpoxBase = require("../setDDR/Smallpox");

class Smallpox extends SmallpoxBase {
  constructor (game) {
    super(game, "Smallpox", "Magic 2012", "M12");
  }
}

module.exports = Smallpox;
