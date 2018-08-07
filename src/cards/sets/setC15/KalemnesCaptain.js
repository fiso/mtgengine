"use strict";
const Constants = require ("../../../Constants");
const KalemnesCaptainBase = require("../setCM2/KalemnesCaptain");

class KalemnesCaptain extends KalemnesCaptainBase {
  constructor (game) {
    super(game, "Kalemne's Captain", "Commander 2015", "C15");
  }
}

module.exports = KalemnesCaptain;
