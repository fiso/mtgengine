"use strict";
const Constants = require ("../../../Constants");
const ApexHawksBase = require("../setCNS/ApexHawks");

class ApexHawks extends ApexHawksBase {
  constructor (game) {
    super(game, "Apex Hawks", "Worldwake", "WWK");
  }
}

module.exports = ApexHawks;
