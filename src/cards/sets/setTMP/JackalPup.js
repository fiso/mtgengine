"use strict";
const Constants = require ("../../../Constants");
const JackalPupBase = require("../setA25/JackalPup");

class JackalPup extends JackalPupBase {
  constructor (game) {
    super(game, "Jackal Pup", "Tempest", "TMP");
  }
}

module.exports = JackalPup;
