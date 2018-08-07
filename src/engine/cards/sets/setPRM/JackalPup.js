"use strict";
const Constants = require ("../../../Constants");
const JackalPupBase = require("../setA25/JackalPup");

class JackalPup extends JackalPupBase {
  constructor (game) {
    super(game, "Jackal Pup", "Magic Online Promos", "PRM");
  }
}

module.exports = JackalPup;
