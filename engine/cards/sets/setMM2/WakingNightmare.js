"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WakingNightmareBase = require("../setCHK/WakingNightmare.js");

class WakingNightmare extends WakingNightmareBase {
  constructor(game) {
    super(game, "Waking Nightmare", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WakingNightmare;
