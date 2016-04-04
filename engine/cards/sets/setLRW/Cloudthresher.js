"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CloudthresherBase = require("../setC15/Cloudthresher.js");

class Cloudthresher extends CloudthresherBase {
  constructor(game) {
    super(game, "Cloudthresher", "Lorwyn", "LRW");
  }
}

module.exports = Cloudthresher;
