"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorshipBase = require("../set8ED/Worship.js");

class Worship extends WorshipBase {
  constructor(game) {
    super(game, "Worship", "Urza's Saga", "USG");
  }
}

module.exports = Worship;
