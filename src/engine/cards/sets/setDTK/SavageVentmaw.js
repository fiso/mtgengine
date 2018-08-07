"use strict";
const Constants = require ("../../../Constants");
const SavageVentmawBase = require("../setBBD/SavageVentmaw");

class SavageVentmaw extends SavageVentmawBase {
  constructor (game) {
    super(game, "Savage Ventmaw", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SavageVentmaw;
