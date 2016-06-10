"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PiannaNomadCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Pianna, Nomad Captain", "Odyssey", "ODY");
  }
}

module.exports = PiannaNomadCaptain;
