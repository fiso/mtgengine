"use strict";
const Constants = require ("../../../Constants");
const TyrantofValakutBase = require("../setOGW/TyrantofValakut");

class TyrantofValakut extends TyrantofValakutBase {
  constructor (game) {
    super(game, "Tyrant of Valakut", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = TyrantofValakut;
