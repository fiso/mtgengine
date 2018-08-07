"use strict";
const Constants = require ("../../../Constants");
const CreeperhulkBase = require("../setCMA/Creeperhulk");

class Creeperhulk extends CreeperhulkBase {
  constructor (game) {
    super(game, "Creeperhulk", "Commander 2014", "C14");
  }
}

module.exports = Creeperhulk;
