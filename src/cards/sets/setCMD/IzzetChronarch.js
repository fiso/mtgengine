"use strict";
const Constants = require ("../../../Constants");
const IzzetChronarchBase = require("../setC17/IzzetChronarch");

class IzzetChronarch extends IzzetChronarchBase {
  constructor (game) {
    super(game, "Izzet Chronarch", "Commander 2011", "CMD");
  }
}

module.exports = IzzetChronarch;
