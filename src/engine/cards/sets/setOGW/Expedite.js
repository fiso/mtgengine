"use strict";
const Constants = require ("../../../Constants");
const ExpediteBase = require("../setBBD/Expedite");

class Expedite extends ExpediteBase {
  constructor (game) {
    super(game, "Expedite", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Expedite;
