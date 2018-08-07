"use strict";
const Constants = require ("../../../Constants");
const PulseofMurasaBase = require("../setBBD/PulseofMurasa");

class PulseofMurasa extends PulseofMurasaBase {
  constructor (game) {
    super(game, "Pulse of Murasa", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = PulseofMurasa;
