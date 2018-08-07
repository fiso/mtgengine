"use strict";
const Constants = require ("../../../Constants");
const MenacingOgreBase = require("../setHOP/MenacingOgre");

class MenacingOgre extends MenacingOgreBase {
  constructor (game) {
    super(game, "Menacing Ogre", "Onslaught", "ONS");
  }
}

module.exports = MenacingOgre;
