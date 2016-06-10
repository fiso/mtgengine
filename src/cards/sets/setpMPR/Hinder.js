"use strict";
const Constants = require ("../../../Constants");
const HinderBase = require("../setCHK/Hinder");

class Hinder extends HinderBase {
  constructor (game) {
    super(game, "Hinder", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Hinder;
