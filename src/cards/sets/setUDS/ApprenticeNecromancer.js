"use strict";
const Constants = require ("../../../Constants");
const ApprenticeNecromancerBase = require("../setC17/ApprenticeNecromancer");

class ApprenticeNecromancer extends ApprenticeNecromancerBase {
  constructor (game) {
    super(game, "Apprentice Necromancer", "Urza's Destiny", "UDS");
  }
}

module.exports = ApprenticeNecromancer;
