"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OkkBase = require("../set8ED/Okk.js");

class Okk extends OkkBase {
  constructor(game) {
    super(game, "Okk", "Urza's Saga", "USG");
  }
}

module.exports = Okk;
