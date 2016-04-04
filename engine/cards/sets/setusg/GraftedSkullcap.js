"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GraftedSkullcapBase = require("../set7ED/GraftedSkullcap.js");

class GraftedSkullcap extends GraftedSkullcapBase {
  constructor(game) {
    super(game, "Grafted Skullcap", "Urza's Saga", "USG");
  }
}

module.exports = GraftedSkullcap;
