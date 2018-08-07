"use strict";
const Constants = require ("../../../Constants");
const ScragnothBase = require("../setTSB/Scragnoth");

class Scragnoth extends ScragnothBase {
  constructor (game) {
    super(game, "Scragnoth", "Friday Night Magic 2003", "F03");
  }
}

module.exports = Scragnoth;
