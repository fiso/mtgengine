"use strict";
const Constants = require ("../../../Constants");
const MightoftheMassesBase = require("../setORI/MightoftheMasses");

class MightoftheMasses extends MightoftheMassesBase {
  constructor (game) {
    super(game, "Might of the Masses", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MightoftheMasses;
