"use strict";
const Constants = require ("../../../Constants");
const AvalancheTuskerBase = require("../setKTK/AvalancheTusker");

class AvalancheTusker extends AvalancheTuskerBase {
  constructor (game) {
    super(game, "Avalanche Tusker", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = AvalancheTusker;
