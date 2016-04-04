"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiannaNomadCaptain extends Card {
  constructor(game) {
    super(game, "Pianna, Nomad Captain", "Odyssey", "ODY");
  }
}

module.exports = PiannaNomadCaptain;
