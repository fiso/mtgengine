"use strict";
const Constants = require ("../../../Constants");
const DreamFractureBase = require("../setCNS/DreamFracture");

class DreamFracture extends DreamFractureBase {
  constructor (game) {
    super(game, "Dream Fracture", "Eventide", "EVE");
  }
}

module.exports = DreamFracture;
