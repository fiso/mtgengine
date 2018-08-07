"use strict";
const Constants = require ("../../../Constants");
const MusicianBase = require("../setME2/Musician");

class Musician extends MusicianBase {
  constructor (game) {
    super(game, "Musician", "Ice Age", "ICE");
  }
}

module.exports = Musician;
