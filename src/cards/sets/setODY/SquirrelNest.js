"use strict";
const Constants = require ("../../../Constants");
const SquirrelNestBase = require("../setCNS/SquirrelNest");

class SquirrelNest extends SquirrelNestBase {
  constructor(game) {
    super(game, "Squirrel Nest", "Odyssey", "ODY");
  }
}

module.exports = SquirrelNest;
