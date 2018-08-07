"use strict";
const Constants = require ("../../../Constants");
const TuskguardCaptainBase = require("../setCM2/TuskguardCaptain");

class TuskguardCaptain extends TuskguardCaptainBase {
  constructor (game) {
    super(game, "Tuskguard Captain", "Khans of Tarkir", "KTK");
  }
}

module.exports = TuskguardCaptain;
