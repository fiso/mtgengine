"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MenacingOgreBase = require("../setONS/MenacingOgre.js");

class MenacingOgre extends MenacingOgreBase {
  constructor(game) {
    super(game, "Menacing Ogre", "Planechase", "HOP");
  }
}

module.exports = MenacingOgre;
