"use strict";
const Constants = require ("../../../Constants");
const NarsetEnlightenedMasterBase = require("../setKTK/NarsetEnlightenedMaster");

class NarsetEnlightenedMaster extends NarsetEnlightenedMasterBase {
  constructor (game) {
    super(game, "Narset, Enlightened Master", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = NarsetEnlightenedMaster;
