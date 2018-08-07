"use strict";
const Constants = require ("../../../Constants");
const GraftedSkullcapBase = require("../set7ED/GraftedSkullcap");

class GraftedSkullcap extends GraftedSkullcapBase {
  constructor (game) {
    super(game, "Grafted Skullcap", "Urza's Saga", "USG");
  }
}

module.exports = GraftedSkullcap;
