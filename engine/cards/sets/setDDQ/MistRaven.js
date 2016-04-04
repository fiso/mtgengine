"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistRavenBase = require("../setAVR/MistRaven.js");

class MistRaven extends MistRavenBase {
  constructor(game) {
    super(game, "Mist Raven", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MistRaven;
