"use strict";
const Constants = require ("../../../Constants");
const VividCreekBase = require("../setC13/VividCreek");

class VividCreek extends VividCreekBase {
  constructor (game) {
    super(game, "Vivid Creek", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = VividCreek;
