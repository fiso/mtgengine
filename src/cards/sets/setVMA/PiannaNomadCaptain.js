"use strict";
const Constants = require ("../../../Constants");
const PiannaNomadCaptainBase = require("../setODY/PiannaNomadCaptain");

class PiannaNomadCaptain extends PiannaNomadCaptainBase {
  constructor (game) {
    super(game, "Pianna, Nomad Captain", "Vintage Masters", "VMA");
  }
}

module.exports = PiannaNomadCaptain;
