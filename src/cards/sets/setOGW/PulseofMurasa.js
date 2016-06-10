"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulseofMurasa extends UnimplementedCard {
  constructor (game) {
    super(game, "Pulse of Murasa", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = PulseofMurasa;
