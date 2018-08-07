"use strict";
const Constants = require ("../../../Constants");
const TyrantsMachineBase = require("../setBBD/TyrantsMachine");

class TyrantsMachine extends TyrantsMachineBase {
  constructor (game) {
    super(game, "Tyrant's Machine", "Magic 2015", "M15");
  }
}

module.exports = TyrantsMachine;
