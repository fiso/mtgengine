"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PiannaNomadCaptainBase = require("../setODY/PiannaNomadCaptain.js");

class PiannaNomadCaptain extends PiannaNomadCaptainBase {
  constructor(game) {
    super(game, "Pianna, Nomad Captain", "Vintage Masters", "VMA");
  }
}

module.exports = PiannaNomadCaptain;
