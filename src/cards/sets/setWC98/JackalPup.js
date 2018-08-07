"use strict";
const Constants = require ("../../../Constants");
const JackalPupBase = require("../setA25/JackalPup");

class JackalPup extends JackalPupBase {
  constructor (game) {
    super(game, "Jackal Pup", "World Championship Decks 1998", "WC98");
  }
}

module.exports = JackalPup;
