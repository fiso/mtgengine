"use strict";
const Constants = require ("../../../Constants");
const SimianGruntsBase = require("../setULG/SimianGrunts");

class SimianGrunts extends SimianGruntsBase {
  constructor (game) {
    super(game, "Simian Grunts", "Vintage Masters", "VMA");
  }
}

module.exports = SimianGrunts;
