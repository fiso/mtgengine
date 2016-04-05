"use strict";
const Constants = require ("../../../Constants");
const QuashBase = require("../setBOK/Quash");

class Quash extends QuashBase {
  constructor(game) {
    super(game, "Quash", "Urza's Destiny", "UDS");
  }
}

module.exports = Quash;
