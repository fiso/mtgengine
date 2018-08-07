"use strict";
const Constants = require ("../../../Constants");
const BlastodermBase = require("../setGVL/Blastoderm");

class Blastoderm extends BlastodermBase {
  constructor (game) {
    super(game, "Blastoderm", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Blastoderm;
