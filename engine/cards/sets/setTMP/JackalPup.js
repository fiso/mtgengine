"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JackalPupBase = require("../setpFNM/JackalPup.js");

class JackalPup extends JackalPupBase {
  constructor(game) {
    super(game, "Jackal Pup", "Tempest", "TMP");
  }
}

module.exports = JackalPup;
