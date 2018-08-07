"use strict";
const Constants = require ("../../../Constants");
const AvalancheTuskerBase = require("../setKTK/AvalancheTusker");

class AvalancheTusker extends AvalancheTuskerBase {
  constructor (game) {
    super(game, "Avalanche Tusker", "Magic Online Promos", "PRM");
  }
}

module.exports = AvalancheTusker;
