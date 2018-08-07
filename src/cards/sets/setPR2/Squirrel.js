"use strict";
const Constants = require ("../../../Constants");
const SquirrelBase = require("../setTUST/Squirrel");

class Squirrel extends SquirrelBase {
  constructor (game) {
    super(game, "Squirrel", "Magic Player Rewards 2002", "PR2");
  }
}

module.exports = Squirrel;
