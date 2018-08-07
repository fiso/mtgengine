"use strict";
const Constants = require ("../../../Constants");
const PiannaNomadCaptainBase = require("../setVMA/PiannaNomadCaptain");

class PiannaNomadCaptain extends PiannaNomadCaptainBase {
  constructor (game) {
    super(game, "Pianna, Nomad Captain", "Odyssey", "ODY");
  }
}

module.exports = PiannaNomadCaptain;
