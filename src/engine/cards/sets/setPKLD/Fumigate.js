"use strict";
const Constants = require ("../../../Constants");
const FumigateBase = require("../setKLD/Fumigate");

class Fumigate extends FumigateBase {
  constructor (game) {
    super(game, "Fumigate", "Kaladesh Promos", "PKLD");
  }
}

module.exports = Fumigate;
