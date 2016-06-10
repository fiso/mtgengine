"use strict";
const Constants = require ("../../../Constants");
const CowardiceBase = require("../set8ED/Cowardice");

class Cowardice extends CowardiceBase {
  constructor (game) {
    super(game, "Cowardice", "Mercadian Masques", "MMQ");
  }
}

module.exports = Cowardice;
