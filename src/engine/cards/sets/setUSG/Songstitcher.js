"use strict";
const Constants = require ("../../../Constants");
const SongstitcherBase = require("../setBRB/Songstitcher");

class Songstitcher extends SongstitcherBase {
  constructor (game) {
    super(game, "Songstitcher", "Urza's Saga", "USG");
  }
}

module.exports = Songstitcher;
