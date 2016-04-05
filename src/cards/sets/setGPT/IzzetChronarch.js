"use strict";
const Constants = require ("../../../Constants");
const IzzetChronarchBase = require("../setDDJ/IzzetChronarch");

class IzzetChronarch extends IzzetChronarchBase {
  constructor(game) {
    super(game, "Izzet Chronarch", "Guildpact", "GPT");
  }
}

module.exports = IzzetChronarch;
