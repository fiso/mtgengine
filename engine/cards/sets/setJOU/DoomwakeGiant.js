"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoomwakeGiantBase = require("../setC15/DoomwakeGiant.js");

class DoomwakeGiant extends DoomwakeGiantBase {
  constructor(game) {
    super(game, "Doomwake Giant", "Journey into Nyx", "JOU");
  }
}

module.exports = DoomwakeGiant;
