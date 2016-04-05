"use strict";
const Constants = require ("../../../Constants");
const OkkBase = require("../set8ED/Okk");

class Okk extends OkkBase {
  constructor(game) {
    super(game, "Okk", "Seventh Edition", "7ED");
  }
}

module.exports = Okk;
