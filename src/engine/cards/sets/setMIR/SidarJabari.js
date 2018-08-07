"use strict";
const Constants = require ("../../../Constants");
const SidarJabariBase = require("../setVMA/SidarJabari");

class SidarJabari extends SidarJabariBase {
  constructor (game) {
    super(game, "Sidar Jabari", "Mirage", "MIR");
  }
}

module.exports = SidarJabari;
