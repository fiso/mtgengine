"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisorderBase = require("../set7ED/Disorder.js");

class Disorder extends DisorderBase {
  constructor(game) {
    super(game, "Disorder", "Urza's Saga", "USG");
  }
}

module.exports = Disorder;
