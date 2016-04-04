"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NarsetEnlightenedMasterBase = require("../setKTK/NarsetEnlightenedMaster.js");

class NarsetEnlightenedMaster extends NarsetEnlightenedMasterBase {
  constructor(game) {
    super(game, "Narset, Enlightened Master", "Prerelease Events", "pPRE");
  }
}

module.exports = NarsetEnlightenedMaster;
