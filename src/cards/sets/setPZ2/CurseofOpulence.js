"use strict";
const Constants = require ("../../../Constants");
const CurseofOpulenceBase = require("../setC17/CurseofOpulence");

class CurseofOpulence extends CurseofOpulenceBase {
  constructor (game) {
    super(game, "Curse of Opulence", "You Make the Cube", "PZ2");
  }
}

module.exports = CurseofOpulence;
