"use strict";
const Constants = require ("../../../Constants");
const CloudthresherBase = require("../setCMA/Cloudthresher");

class Cloudthresher extends CloudthresherBase {
  constructor (game) {
    super(game, "Cloudthresher", "Commander 2015", "C15");
  }
}

module.exports = Cloudthresher;
