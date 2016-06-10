"use strict";
const Constants = require ("../../../Constants");
const DoomwakeGiantBase = require("../setC15/DoomwakeGiant");

class DoomwakeGiant extends DoomwakeGiantBase {
  constructor (game) {
    super(game, "Doomwake Giant", "Journey into Nyx", "JOU");
  }
}

module.exports = DoomwakeGiant;
