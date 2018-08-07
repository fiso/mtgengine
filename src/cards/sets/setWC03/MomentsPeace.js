"use strict";
const Constants = require ("../../../Constants");
const MomentsPeaceBase = require("../setTD0/MomentsPeace");

class MomentsPeace extends MomentsPeaceBase {
  constructor (game) {
    super(game, "Moment's Peace", "World Championship Decks 2003", "WC03");
  }
}

module.exports = MomentsPeace;
