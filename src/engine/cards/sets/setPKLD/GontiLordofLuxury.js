"use strict";
const Constants = require ("../../../Constants");
const GontiLordofLuxuryBase = require("../setKLD/GontiLordofLuxury");

class GontiLordofLuxury extends GontiLordofLuxuryBase {
  constructor (game) {
    super(game, "Gonti, Lord of Luxury", "Kaladesh Promos", "PKLD");
  }
}

module.exports = GontiLordofLuxury;
