"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReprocessBase = require("../set7ED/Reprocess.js");

class Reprocess extends ReprocessBase {
  constructor(game) {
    super(game, "Reprocess", "Urza's Saga", "USG");
  }
}

module.exports = Reprocess;
