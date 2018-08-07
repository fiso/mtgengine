"use strict";
const Constants = require ("../../../Constants");
const CurseofInertiaBase = require("../setCMA/CurseofInertia");

class CurseofInertia extends CurseofInertiaBase {
  constructor (game) {
    super(game, "Curse of Inertia", "Commander 2013", "C13");
  }
}

module.exports = CurseofInertia;
