"use strict";
const Constants = require ("../../../Constants");
const CurseofThirstBase = require("../setDKA/CurseofThirst");

class CurseofThirst extends CurseofThirstBase {
  constructor (game) {
    super(game, "Curse of Thirst", "Magic Online Promos", "PRM");
  }
}

module.exports = CurseofThirst;
