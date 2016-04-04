"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RabidWombatBase = require("../setCHR/RabidWombat.js");

class RabidWombat extends RabidWombatBase {
  constructor(game) {
    super(game, "Rabid Wombat", "Legends", "LEG");
  }
}

module.exports = RabidWombat;
