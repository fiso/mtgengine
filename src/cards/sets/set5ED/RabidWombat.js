"use strict";
const Constants = require ("../../../Constants");
const RabidWombatBase = require("../setCHR/RabidWombat");

class RabidWombat extends RabidWombatBase {
  constructor (game) {
    super(game, "Rabid Wombat", "Fifth Edition", "5ED");
  }
}

module.exports = RabidWombat;
