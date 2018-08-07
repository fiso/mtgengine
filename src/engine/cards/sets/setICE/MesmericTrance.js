"use strict";
const Constants = require ("../../../Constants");
const MesmericTranceBase = require("../setME2/MesmericTrance");

class MesmericTrance extends MesmericTranceBase {
  constructor (game) {
    super(game, "Mesmeric Trance", "Ice Age", "ICE");
  }
}

module.exports = MesmericTrance;
