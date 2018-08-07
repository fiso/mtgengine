"use strict";
const Constants = require ("../../../Constants");
const ScragnothBase = require("../setTSB/Scragnoth");

class Scragnoth extends ScragnothBase {
  constructor (game) {
    super(game, "Scragnoth", "Magic Online Promos", "PRM");
  }
}

module.exports = Scragnoth;
