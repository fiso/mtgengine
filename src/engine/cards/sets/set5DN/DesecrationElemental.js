"use strict";
const Constants = require ("../../../Constants");
const DesecrationElementalBase = require("../setTD2/DesecrationElemental");

class DesecrationElemental extends DesecrationElementalBase {
  constructor (game) {
    super(game, "Desecration Elemental", "Fifth Dawn", "5DN");
  }
}

module.exports = DesecrationElemental;
