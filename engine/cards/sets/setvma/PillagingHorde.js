"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PillagingHordeBase = require("../setPOR/PillagingHorde.js");

class PillagingHorde extends PillagingHordeBase {
  constructor(game) {
    super(game, "Pillaging Horde", "Vintage Masters", "VMA");
  }
}

module.exports = PillagingHorde;
