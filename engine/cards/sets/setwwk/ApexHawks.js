"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ApexHawksBase = require("../setCNS/ApexHawks.js");

class ApexHawks extends ApexHawksBase {
  constructor(game) {
    super(game, "Apex Hawks", "Worldwake", "WWK");
  }
}

module.exports = ApexHawks;
