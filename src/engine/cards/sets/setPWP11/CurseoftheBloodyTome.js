"use strict";
const Constants = require ("../../../Constants");
const CurseoftheBloodyTomeBase = require("../setISD/CurseoftheBloodyTome");

class CurseoftheBloodyTome extends CurseoftheBloodyTomeBase {
  constructor (game) {
    super(game, "Curse of the Bloody Tome", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = CurseoftheBloodyTome;
