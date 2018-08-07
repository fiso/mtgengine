"use strict";
const Constants = require ("../../../Constants");
const MurmuringBoskBase = require("../setCM2/MurmuringBosk");

class MurmuringBosk extends MurmuringBoskBase {
  constructor (game) {
    super(game, "Murmuring Bosk", "Commander 2016", "C16");
  }
}

module.exports = MurmuringBosk;
