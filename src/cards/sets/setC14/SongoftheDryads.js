"use strict";
const Constants = require ("../../../Constants");
const SongoftheDryadsBase = require("../setCMA/SongoftheDryads");

class SongoftheDryads extends SongoftheDryadsBase {
  constructor (game) {
    super(game, "Song of the Dryads", "Commander 2014", "C14");
  }
}

module.exports = SongoftheDryads;
