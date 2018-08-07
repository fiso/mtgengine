"use strict";
const Constants = require ("../../../Constants");
const BlastodermBase = require("../setGVL/Blastoderm");

class Blastoderm extends BlastodermBase {
  constructor (game) {
    super(game, "Blastoderm", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Blastoderm;
