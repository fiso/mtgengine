"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BedlamBase = require("../set7ED/Bedlam.js");

class Bedlam extends BedlamBase {
  constructor(game) {
    super(game, "Bedlam", "Urza's Saga", "USG");
  }
}

module.exports = Bedlam;
