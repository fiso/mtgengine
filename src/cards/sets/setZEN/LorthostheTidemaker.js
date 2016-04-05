"use strict";
const Constants = require ("../../../Constants");
const LorthostheTidemakerBase = require("../setC14/LorthostheTidemaker");

class LorthostheTidemaker extends LorthostheTidemakerBase {
  constructor(game) {
    super(game, "Lorthos, the Tidemaker", "Zendikar", "ZEN");
  }
}

module.exports = LorthostheTidemaker;
