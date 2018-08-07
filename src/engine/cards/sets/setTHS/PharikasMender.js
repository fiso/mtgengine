"use strict";
const Constants = require ("../../../Constants");
const PharikasMenderBase = require("../setCN2/PharikasMender");

class PharikasMender extends PharikasMenderBase {
  constructor (game) {
    super(game, "Pharika's Mender", "Theros", "THS");
  }
}

module.exports = PharikasMender;
