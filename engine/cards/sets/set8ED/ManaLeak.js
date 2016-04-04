"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaLeakBase = require("../setpARL/ManaLeak.js");

class ManaLeak extends ManaLeakBase {
  constructor(game) {
    super(game, "Mana Leak", "Eighth Edition", "8ED");
  }
}

module.exports = ManaLeak;
