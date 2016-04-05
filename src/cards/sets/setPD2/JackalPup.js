"use strict";
const Constants = require ("../../../Constants");
const JackalPupBase = require("../setpFNM/JackalPup");

class JackalPup extends JackalPupBase {
  constructor(game) {
    super(game, "Jackal Pup", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = JackalPup;
