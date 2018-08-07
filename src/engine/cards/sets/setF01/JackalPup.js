"use strict";
const Constants = require ("../../../Constants");
const JackalPupBase = require("../setA25/JackalPup");

class JackalPup extends JackalPupBase {
  constructor (game) {
    super(game, "Jackal Pup", "Friday Night Magic 2001", "F01");
  }
}

module.exports = JackalPup;
