"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HinderBase = require("../setCHK/Hinder.js");

class Hinder extends HinderBase {
  constructor(game) {
    super(game, "Hinder", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Hinder;
