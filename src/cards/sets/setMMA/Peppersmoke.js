"use strict";
const Constants = require ("../../../Constants");
const PeppersmokeBase = require("../setLRW/Peppersmoke");

class Peppersmoke extends PeppersmokeBase {
  constructor (game) {
    super(game, "Peppersmoke", "Modern Masters", "MMA");
  }
}

module.exports = Peppersmoke;
