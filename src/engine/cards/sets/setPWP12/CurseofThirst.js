"use strict";
const Constants = require ("../../../Constants");
const CurseofThirstBase = require("../setDKA/CurseofThirst");

class CurseofThirst extends CurseofThirstBase {
  constructor (game) {
    super(game, "Curse of Thirst", "Wizards Play Network 2012", "PWP12");
  }
}

module.exports = CurseofThirst;
