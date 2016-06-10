"use strict";
const Constants = require ("../../../Constants");
const SimicInitiateBase = require("../setDIS/SimicInitiate");

class SimicInitiate extends SimicInitiateBase {
  constructor (game) {
    super(game, "Simic Initiate", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SimicInitiate;
