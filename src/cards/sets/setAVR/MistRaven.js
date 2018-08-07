"use strict";
const Constants = require ("../../../Constants");
const MistRavenBase = require("../setMM3/MistRaven");

class MistRaven extends MistRavenBase {
  constructor (game) {
    super(game, "Mist Raven", "Avacyn Restored", "AVR");
  }
}

module.exports = MistRaven;
