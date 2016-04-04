"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvesofDeepShadowBase = require("../setDDJ/ElvesofDeepShadow.js");

class ElvesofDeepShadow extends ElvesofDeepShadowBase {
  constructor(game) {
    super(game, "Elves of Deep Shadow", "Masters Edition III", "ME3");
  }
}

module.exports = ElvesofDeepShadow;
