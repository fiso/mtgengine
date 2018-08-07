"use strict";
const Constants = require ("../../../Constants");
const RewindBase = require("../setMM3/Rewind");

class Rewind extends RewindBase {
  constructor (game) {
    super(game, "Rewind", "Ninth Edition", "9ED");
  }
}

module.exports = Rewind;
