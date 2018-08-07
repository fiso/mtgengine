"use strict";
const Constants = require ("../../../Constants");
const TuskguardCaptainBase = require("../setCM2/TuskguardCaptain");

class TuskguardCaptain extends TuskguardCaptainBase {
  constructor (game) {
    super(game, "Tuskguard Captain", "Commander 2016", "C16");
  }
}

module.exports = TuskguardCaptain;
