"use strict";
const Constants = require ("../../../Constants");
const MenacingOgreBase = require("../setONS/MenacingOgre");

class MenacingOgre extends MenacingOgreBase {
  constructor (game) {
    super(game, "Menacing Ogre", "Planechase", "HOP");
  }
}

module.exports = MenacingOgre;
