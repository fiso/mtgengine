"use strict";
const Constants = require ("../../../Constants");
const SquirrelBase = require("../setTUST/Squirrel");

class Squirrel extends SquirrelBase {
  constructor (game) {
    super(game, "Squirrel", "Conspiracy Tokens", "TCNS");
  }
}

module.exports = Squirrel;
