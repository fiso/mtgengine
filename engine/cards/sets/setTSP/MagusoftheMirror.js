"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagusoftheMirrorBase = require("../setCNS/MagusoftheMirror.js");

class MagusoftheMirror extends MagusoftheMirrorBase {
  constructor(game) {
    super(game, "Magus of the Mirror", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheMirror;
