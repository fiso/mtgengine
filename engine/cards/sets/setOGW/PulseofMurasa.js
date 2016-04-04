"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PulseofMurasa extends Card {
  constructor(game) {
    super(game, "Pulse of Murasa", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = PulseofMurasa;
