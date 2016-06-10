"use strict";
const Constants = require ("../../../Constants");
const PilloryoftheSleeplessBase = require("../setGPT/PilloryoftheSleepless");

class PilloryoftheSleepless extends PilloryoftheSleeplessBase {
  constructor (game) {
    super(game, "Pillory of the Sleepless", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PilloryoftheSleepless;
