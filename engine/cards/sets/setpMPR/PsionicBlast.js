"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsionicBlastBase = require("../setCED/PsionicBlast.js");

class PsionicBlast extends PsionicBlastBase {
  constructor(game) {
    super(game, "Psionic Blast", "Magic Player Rewards", "pMPR");
  }
}

module.exports = PsionicBlast;
