"use strict";
const Constants = require ("../../../Constants");
const IncendiaryCommandBase = require("../setC13/IncendiaryCommand");

class IncendiaryCommand extends IncendiaryCommandBase {
  constructor(game) {
    super(game, "Incendiary Command", "Lorwyn", "LRW");
  }
}

module.exports = IncendiaryCommand;
