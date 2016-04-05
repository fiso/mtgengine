"use strict";
const Constants = require ("../../../Constants");
const CurseofThirstBase = require("../setDKA/CurseofThirst");

class CurseofThirst extends CurseofThirstBase {
  constructor(game) {
    super(game, "Curse of Thirst", "WPN and Gateway", "pWPN");
  }
}

module.exports = CurseofThirst;
