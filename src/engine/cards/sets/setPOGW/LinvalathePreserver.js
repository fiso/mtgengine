"use strict";
const Constants = require ("../../../Constants");
const LinvalathePreserverBase = require("../setOGW/LinvalathePreserver");

class LinvalathePreserver extends LinvalathePreserverBase {
  constructor (game) {
    super(game, "Linvala, the Preserver", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = LinvalathePreserver;
