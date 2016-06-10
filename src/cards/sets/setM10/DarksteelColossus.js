"use strict";
const Constants = require ("../../../Constants");
const DarksteelColossusBase = require("../setDST/DarksteelColossus");

class DarksteelColossus extends DarksteelColossusBase {
  constructor (game) {
    super(game, "Darksteel Colossus", "Magic 2010", "M10");
  }
}

module.exports = DarksteelColossus;
