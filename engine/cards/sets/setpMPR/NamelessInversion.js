"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NamelessInversionBase = require("../setLRW/NamelessInversion.js");

class NamelessInversion extends NamelessInversionBase {
  constructor(game) {
    super(game, "Nameless Inversion", "Magic Player Rewards", "pMPR");
  }
}

module.exports = NamelessInversion;
