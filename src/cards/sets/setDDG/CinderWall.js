"use strict";
const Constants = require ("../../../Constants");
const CinderWallBase = require("../setCNS/CinderWall");

class CinderWall extends CinderWallBase {
  constructor (game) {
    super(game, "Cinder Wall", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CinderWall;
