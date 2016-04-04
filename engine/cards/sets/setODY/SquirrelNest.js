"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SquirrelNestBase = require("../setCNS/SquirrelNest.js");

class SquirrelNest extends SquirrelNestBase {
  constructor(game) {
    super(game, "Squirrel Nest", "Odyssey", "ODY");
  }
}

module.exports = SquirrelNest;
