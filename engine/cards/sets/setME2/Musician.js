"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MusicianBase = require("../setICE/Musician.js");

class Musician extends MusicianBase {
  constructor(game) {
    super(game, "Musician", "Masters Edition II", "ME2");
  }
}

module.exports = Musician;
