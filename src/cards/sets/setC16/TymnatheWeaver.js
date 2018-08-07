"use strict";
const Constants = require ("../../../Constants");
const TymnatheWeaverBase = require("../setPZ2/TymnatheWeaver");

class TymnatheWeaver extends TymnatheWeaverBase {
  constructor (game) {
    super(game, "Tymna the Weaver", "Commander 2016", "C16");
  }
}

module.exports = TymnatheWeaver;
