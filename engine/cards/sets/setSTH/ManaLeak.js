"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaLeakBase = require("../setpARL/ManaLeak.js");

class ManaLeak extends ManaLeakBase {
  constructor(game) {
    super(game, "Mana Leak", "Stronghold", "STH");
  }
}

module.exports = ManaLeak;
