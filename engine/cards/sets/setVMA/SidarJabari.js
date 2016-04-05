"use strict";
const Constants = require ("../../../Constants");
const SidarJabariBase = require("../setMIR/SidarJabari");

class SidarJabari extends SidarJabariBase {
  constructor(game) {
    super(game, "Sidar Jabari", "Vintage Masters", "VMA");
  }
}

module.exports = SidarJabari;
