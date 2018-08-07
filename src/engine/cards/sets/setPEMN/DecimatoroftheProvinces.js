"use strict";
const Constants = require ("../../../Constants");
const DecimatoroftheProvincesBase = require("../setEMN/DecimatoroftheProvinces");

class DecimatoroftheProvinces extends DecimatoroftheProvincesBase {
  constructor (game) {
    super(game, "Decimator of the Provinces", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = DecimatoroftheProvinces;
