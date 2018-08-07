"use strict";
const Constants = require ("../../../Constants");
const MagusoftheMirrorBase = require("../setCNS/MagusoftheMirror");

class MagusoftheMirror extends MagusoftheMirrorBase {
  constructor (game) {
    super(game, "Magus of the Mirror", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheMirror;
