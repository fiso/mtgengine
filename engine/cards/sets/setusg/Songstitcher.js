"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SongstitcherBase = require("../setBRB/Songstitcher.js");

class Songstitcher extends SongstitcherBase {
  constructor(game) {
    super(game, "Songstitcher", "Urza's Saga", "USG");
  }
}

module.exports = Songstitcher;
