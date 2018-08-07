"use strict";
const Constants = require ("../../../Constants");
const SilentGravestoneBase = require("../setPRIX/SilentGravestone");

class SilentGravestone extends SilentGravestoneBase {
  constructor (game) {
    super(game, "Silent Gravestone", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SilentGravestone;
