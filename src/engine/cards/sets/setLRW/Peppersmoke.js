"use strict";
const Constants = require ("../../../Constants");
const PeppersmokeBase = require("../setMMA/Peppersmoke");

class Peppersmoke extends PeppersmokeBase {
  constructor (game) {
    super(game, "Peppersmoke", "Lorwyn", "LRW");
  }
}

module.exports = Peppersmoke;
