"use strict";
const Constants = require ("../../../Constants");
const ChandraFlamecallerBase = require("../setPS16/ChandraFlamecaller");

class ChandraFlamecaller extends ChandraFlamecallerBase {
  constructor (game) {
    super(game, "Chandra, Flamecaller", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ChandraFlamecaller;
