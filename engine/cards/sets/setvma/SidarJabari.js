"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SidarJabariBase = require("../setMIR/SidarJabari.js");

class SidarJabari extends SidarJabariBase {
  constructor(game) {
    super(game, "Sidar Jabari", "Vintage Masters", "VMA");
  }
}

module.exports = SidarJabari;
