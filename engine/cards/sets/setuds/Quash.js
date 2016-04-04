"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuashBase = require("../setBOK/Quash.js");

class Quash extends QuashBase {
  constructor(game) {
    super(game, "Quash", "Urza's Destiny", "UDS");
  }
}

module.exports = Quash;
