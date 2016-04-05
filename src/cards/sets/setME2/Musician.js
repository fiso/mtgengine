"use strict";
const Constants = require ("../../../Constants");
const MusicianBase = require("../setICE/Musician");

class Musician extends MusicianBase {
  constructor(game) {
    super(game, "Musician", "Masters Edition II", "ME2");
  }
}

module.exports = Musician;
