"use strict";
const Constants = require ("../../../Constants");
const DarksteelColossusBase = require("../setM10/DarksteelColossus");

class DarksteelColossus extends DarksteelColossusBase {
  constructor (game) {
    super(game, "Darksteel Colossus", "Darksteel", "DST");
  }
}

module.exports = DarksteelColossus;
