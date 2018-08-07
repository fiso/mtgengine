"use strict";
const Constants = require ("../../../Constants");
const EarlofSquirrelBase = require("../setUST/EarlofSquirrel");

class EarlofSquirrel extends EarlofSquirrelBase {
  constructor (game) {
    super(game, "Earl of Squirrel", "Unstable Promos", "PUST");
  }
}

module.exports = EarlofSquirrel;
