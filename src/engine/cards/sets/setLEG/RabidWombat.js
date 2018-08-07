"use strict";
const Constants = require ("../../../Constants");
const RabidWombatBase = require("../setMED/RabidWombat");

class RabidWombat extends RabidWombatBase {
  constructor (game) {
    super(game, "Rabid Wombat", "Legends", "LEG");
  }
}

module.exports = RabidWombat;
