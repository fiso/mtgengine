"use strict";
const Constants = require ("../../../Constants");
const SimianGruntsBase = require("../setVMA/SimianGrunts");

class SimianGrunts extends SimianGruntsBase {
  constructor (game) {
    super(game, "Simian Grunts", "Urza's Legacy", "ULG");
  }
}

module.exports = SimianGrunts;
