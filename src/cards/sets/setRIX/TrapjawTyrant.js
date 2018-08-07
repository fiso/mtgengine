"use strict";
const Constants = require ("../../../Constants");
const TrapjawTyrantBase = require("../setPRIX/TrapjawTyrant");

class TrapjawTyrant extends TrapjawTyrantBase {
  constructor (game) {
    super(game, "Trapjaw Tyrant", "Rivals of Ixalan", "RIX");
  }
}

module.exports = TrapjawTyrant;
