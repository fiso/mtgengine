"use strict";
const Constants = require ("../../../Constants");
const CowardiceBase = require("../set9ED/Cowardice");

class Cowardice extends CowardiceBase {
  constructor (game) {
    super(game, "Cowardice", "Mercadian Masques", "MMQ");
  }
}

module.exports = Cowardice;
