"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PilloryoftheSleeplessBase = require("../setGPT/PilloryoftheSleepless.js");

class PilloryoftheSleepless extends PilloryoftheSleeplessBase {
  constructor(game) {
    super(game, "Pillory of the Sleepless", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PilloryoftheSleepless;
