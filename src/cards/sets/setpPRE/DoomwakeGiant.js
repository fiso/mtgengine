"use strict";
const Constants = require ("../../../Constants");
const DoomwakeGiantBase = require("../setC15/DoomwakeGiant");

class DoomwakeGiant extends DoomwakeGiantBase {
  constructor (game) {
    super(game, "Doomwake Giant", "Prerelease Events", "pPRE");
  }
}

module.exports = DoomwakeGiant;
