"use strict";
const Constants = require ("../../../Constants");
const SwarmofBloodfliesBase = require("../setBBD/SwarmofBloodflies");

class SwarmofBloodflies extends SwarmofBloodfliesBase {
  constructor (game) {
    super(game, "Swarm of Bloodflies", "Khans of Tarkir", "KTK");
  }
}

module.exports = SwarmofBloodflies;
