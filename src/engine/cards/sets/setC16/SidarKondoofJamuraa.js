"use strict";
const Constants = require ("../../../Constants");
const SidarKondoofJamuraaBase = require("../setPZ2/SidarKondoofJamuraa");

class SidarKondoofJamuraa extends SidarKondoofJamuraaBase {
  constructor (game) {
    super(game, "Sidar Kondo of Jamuraa", "Commander 2016", "C16");
  }
}

module.exports = SidarKondoofJamuraa;
