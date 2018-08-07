"use strict";
const Constants = require ("../../../Constants");
const CloudthresherBase = require("../setCMA/Cloudthresher");

class Cloudthresher extends CloudthresherBase {
  constructor (game) {
    super(game, "Cloudthresher", "Lorwyn", "LRW");
  }
}

module.exports = Cloudthresher;
