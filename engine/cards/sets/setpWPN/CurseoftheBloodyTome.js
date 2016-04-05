"use strict";
const Constants = require ("../../../Constants");
const CurseoftheBloodyTomeBase = require("../setISD/CurseoftheBloodyTome");

class CurseoftheBloodyTome extends CurseoftheBloodyTomeBase {
  constructor(game) {
    super(game, "Curse of the Bloody Tome", "WPN and Gateway", "pWPN");
  }
}

module.exports = CurseoftheBloodyTome;
