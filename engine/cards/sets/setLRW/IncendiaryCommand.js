"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IncendiaryCommandBase = require("../setC13/IncendiaryCommand.js");

class IncendiaryCommand extends IncendiaryCommandBase {
  constructor(game) {
    super(game, "Incendiary Command", "Lorwyn", "LRW");
  }
}

module.exports = IncendiaryCommand;
