"use strict";
const Constants = require ("../../../Constants");
const SavageVentmawBase = require("../setBBD/SavageVentmaw");

class SavageVentmaw extends SavageVentmawBase {
  constructor (game) {
    super(game, "Savage Ventmaw", "Commander 2017", "C17");
  }
}

module.exports = SavageVentmaw;
