"use strict";
const Constants = require ("../../../Constants");
const WharfInfiltratorBase = require("../setEMN/WharfInfiltrator");

class WharfInfiltrator extends WharfInfiltratorBase {
  constructor (game) {
    super(game, "Wharf Infiltrator", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = WharfInfiltrator;
