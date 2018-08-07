"use strict";
const Constants = require ("../../../Constants");
const RabidWombatBase = require("../setMED/RabidWombat");

class RabidWombat extends RabidWombatBase {
  constructor (game) {
    super(game, "Rabid Wombat", "Chronicles", "CHR");
  }
}

module.exports = RabidWombat;
